<script setup>
async function getRandomGif(e) {
    e.preventDefault()
    gif.value = ""
    const res = await $fetch(`/api/random?tag=${tags.value.trim().replace(/\s+/i, "+")}`)
    gif.value = res.gif
}

const gif = useGif()
const tags = useState("tags", () => "")
</script>

<template>
    <form @submit="getRandomGif">
        <i-input v-model="tags" color="light" placeholder="Tags">
            <template #append>
                <i-button type="submit" color="light">Get Random GIF</i-button>
            </template>
        </i-input>
    </form>
</template>