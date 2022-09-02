<script setup>
function getGifFromUrl(e) {
    e.preventDefault()
    gif.value = ""
    gif.value = url.value
    files.value = []
}

function isAbsoluteUrl(url) {
    return url && (url.indexOf("http://") === 0 || url.indexOf("https://") === 0)
}

const gif = useGif()
const files = useFiles()
const url = useState("url", () => "")
</script>

<template>
    <form @submit="getGifFromUrl">
        <va-input v-model="url" color="light" placeholder="URL">
            <template #append>
                <va-button type="submit" :disabled="!isAbsoluteUrl(url)" color="light">From URL</va-button>
            </template>
        </va-input>
    </form>
</template>