<script setup>
import { reactive } from 'vue';
import JSZip from 'jszip';

const state = reactive({
    tab: "tab-1",
    tags: "",
    url: "",
    file: null,
    gif: "",
    small_gif: "",
    gifs: [],
    croping: false,
})

function isAbsoluteUrl(url) {
    return url && (url.indexOf("http://") === 0 || url.indexOf("https://") === 0)
}

function downloadBlob(blob, name) {
    // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
    const blobUrl = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");

    // Set link's href to point to the Blob URL
    link.href = blobUrl;
    link.download = name;

    // Append link to the body
    document.body.appendChild(link);

    // Dispatch click event on the link
    // This is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );

    // Remove link from body
    document.body.removeChild(link);
}

async function getRandomGif(e) {
    e.preventDefault()
    state.gif = ""
    const res = await $fetch(`/api/random?tag=${state.tags.trim().replace(/\s+/i, "+")}`)
    state.gif = res.gif
}

function getGifFromUrl(e) {
    e.preventDefault()
    state.gif = ""
    state.gif = state.url
}

function getGifFromFile(e) {
    // ADD MIME TYPE VALIDATION
    e.preventDefault()
    state.gif = ""
    const reader = new FileReader()
    reader.readAsDataURL(state.file)
    reader.onerror = (error) => console.log("Error: ", error)
    reader.onload = () => state.gif = reader.result
}

async function cropGif() {
    state.croping = true
    const res = await $fetch("/api/crop", { method: "POST", body: { gif: state.gif } })
    state.gifs = res.gifs
    state.small_gif = res.small_gif
    state.croping = false
}

async function downloadGifs() {
    const zip = new JSZip()
    const dir = zip.folder("StreamDeck GifMaker")
    state.gifs.map((gif, i) => dir.file((i + 1) + ".gif", gif, { base64: true }))
    dir.file("gif.gif", state.small_gif, { base64: true })
    const content = await zip.generateAsync({ type: "blob" })
    downloadBlob(content, "StreamDeck-GifMaker.zip")
}
</script>

<template>
    <i-container>
        <i-row center>
            <i-column xs="8">
                <div class="_margin-top:1">
                    <img :src="state.gif || '/placeholder.gif'" class="image -thumbnail" />
                </div>
                <i-tabs v-model="state.tab" class="_border _border-radius _margin-top:1" stretch>
                    <template #header>
                        <i-tab-title for="tab-1">
                            Random GIF
                        </i-tab-title>
                        <i-tab-title for="tab-2">
                            From URL
                        </i-tab-title>
                        <i-tab-title for="tab-3">
                            From File
                        </i-tab-title>
                    </template>
                    <i-tab name="tab-1">
                        <form @submit="getRandomGif">
                            <input type="text" placeholder="Tags" v-model="state.tags" />
                            <button type="submit">Get Random GIF</button>
                        </form>
                    </i-tab>
                    <i-tab name="tab-2">
                        <form @submit="getGifFromUrl">
                            <input type="text" v-model="state.url" />
                            <button type="submit" :disabled="!isAbsoluteUrl(state.url)">From URL</button>
                        </form>
                    </i-tab>
                    <i-tab name="tab-3">
                        <form @submit="getGifFromFile">
                            <input type="file" v-on:change="e => state.file = e.target.files[0]" />
                            <button type="submit" :disabled="!state.file">From File</button>
                        </form>
                    </i-tab>
                </i-tabs>
                <div class="_margin-top:1">
                    <button @click="cropGif" :disabled="!state.gif || state.croping">Crop GIF</button>
                </div>
                <div v-if="state.croping" class="_margin-top:1">
                    <i-loader color="primary" />
                </div>
                <div class="streamDeck _margin-top:1" v-if="!state.croping">
                    <img v-for="gif in state.gifs" :src="`data:image/png;base64,${gif}`" />
                </div>
                <div class="_margin-top:1 _margin-bottom:1" v-if="!state.croping && state.gifs.length > 0">
                    <button @click="downloadGifs">Download</button>
                </div>
            </i-column>
        </i-row>
    </i-container>
</template>

<style scoped>
.streamDeck {
    display: grid;
    grid: 80px 80px 80px / 80px 80px 80px 80px 80px;
    justify-content: center;
}
</style>