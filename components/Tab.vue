<script setup>
defineProps({
    title: String
})

const active = useActive()
</script>

<template>
    <slot v-if="title === active" />
</template>
