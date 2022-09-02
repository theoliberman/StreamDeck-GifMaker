<script setup>

function getGifFromFile(file) {
    removeGif()
    const reader = new FileReader()
    reader.readAsDataURL(file[0])
    reader.onerror = (error) => console.log("Error: ", error)
    reader.onload = () => gif.value = reader.result
}

function removeGif() {
    gif.value = ""
}

const gif = useGif()
const files = useFiles()
</script>

<template>
    <va-file-upload v-model="files" dropzone file-types="image/gif" type="single" v-on:file-added="getGifFromFile"
        v-on:file-removed="removeGif" />
</template>

<style>
.va-file-upload {
    margin-top: 0 !important;
}

.va-file-upload-single-item__content {
    justify-content: center;
}
</style>