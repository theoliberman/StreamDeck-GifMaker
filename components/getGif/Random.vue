<script setup>
async function getRandomGif(e) {
    e.preventDefault()
    gif.value = ""
    const res = await $fetch(`/api/random?tag=${tags.value.trim().replace(/\s+/i, "+")}`)
    gif.value = res.gif
    files.value = []
}

const gif = useGif()
const files = useFiles()
const tags = useState("tags", () => "")
</script>

<template>
    <form @submit="getRandomGif">
        <va-input v-model="tags" placeholder="Tags">
            <template #append>
                <va-button type="submit">Random GIF</va-button>
            </template>
        </va-input>
    </form>
</template>