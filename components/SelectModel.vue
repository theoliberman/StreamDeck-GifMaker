<script setup>
const options = [
    { id: 1, label: 'StreamDeck (5x3)' },
    { id: 2, label: 'StreamDeck XL (8x4)' },
    { id: 3, label: 'StreamDeck Mini (3x2)' },
]
const selected = useSelected();
selected.value = options[0];
</script>

<template>
    <i-select v-model="selected" :options="options">
        <template #append>
            <slot></slot>
        </template>
    </i-select>
</template>