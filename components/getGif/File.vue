<script setup>
function getGifFromFile(e) {
    // ADD MIME TYPE VALIDATION
    e.preventDefault()
    gif.value = ""
    const reader = new FileReader()
    reader.readAsDataURL(file.value)
    reader.onerror = (error) => console.log("Error: ", error)
    reader.onload = () => gif.value = reader.result
}

const gif = useGif()
const file = useState("file")
</script>

<template>
    <form @submit="getGifFromFile">
        <input type="file" v-on:change="e => file = e.target.files[0]" />
        <i-button type="submit" color="light" :disabled="!file">From File</i-button>
    </form>
</template>