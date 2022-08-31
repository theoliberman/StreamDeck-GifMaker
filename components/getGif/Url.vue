<script setup>
function getGifFromUrl(e) {
    e.preventDefault()
    gif.value = ""
    gif.value = url.value
}

function isAbsoluteUrl(url) {
    return url && (url.indexOf("http://") === 0 || url.indexOf("https://") === 0)
}

const gif = useGif()
const url = useState("url", () => "")
</script>

<template>
    <form @submit="getGifFromUrl">
        <i-input v-model="url" color="light" placeholder="URL">
            <template #append>
                <i-button type="submit" :disabled="!isAbsoluteUrl(url)" color="light">From URL</i-button>
            </template>
        </i-input>
    </form>
</template>