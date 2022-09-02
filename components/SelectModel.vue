<script setup>
const options = [
    { id: 1, label: 'StreamDeck (5x3)' },
    { id: 2, label: 'StreamDeck XL (8x4)' },
    { id: 3, label: 'StreamDeck Mini (3x2)' },
]
const selected = useSelected();
</script>
<template>
    <div>
        <va-select v-model="selected" :options="options" text-by="label" value-by="id" track-by="id" />
    </div>
</template>