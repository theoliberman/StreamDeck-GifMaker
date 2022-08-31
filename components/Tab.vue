<script setup>
defineProps({
    title: String
})
</script>

<template>
    <i-tab :name="title">
        <slot />
    </i-tab>
</template>
