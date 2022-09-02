<script setup>
async function cropGif() {
    croping.value = true
    gifs.value = []
    smallGif.value = ""
    const res = await $fetch("/api/crop", { method: "POST", body: { gif: gif.value, model: selected.value } })
    gifs.value = res.gifs
    smallGif.value = res.smallGif
    model.value = selected.value
    croping.value = false
}

const gif = useGif()
const gifs = useGifs()
const smallGif = useSmallGif()
const selected = useSelected()
const model = useModel()
const croping = useState("croping", () => false)
</script>

<template>
    <div>
        <va-button color="light" @click="cropGif" :disabled="!gif" :loading="croping">
            Crop GIF
        </va-button>
    </div>
</template>