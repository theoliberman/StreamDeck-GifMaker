<script setup>
import JSZip from 'jszip'

const gifs = useGifs()
const smallGif = useSmallGif()

async function download() {
    const zip = new JSZip()
    const dir = zip.folder("StreamDeck GifMaker")
    gifs.value.map((gif, i) => dir.file((i + 1) + ".gif", gif, { base64: true }))
    dir.file("gif.gif", smallGif.value, { base64: true })
    const content = await zip.generateAsync({ type: "blob" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(content)
    link.download = "StreamDeck-GifMaker.zip"
    document.body.appendChild(link)
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))
    document.body.removeChild(link)
}
</script>
    
<template>
    <i-button @click="download" v-if="gifs.length > 0">Download</i-button>
</template>