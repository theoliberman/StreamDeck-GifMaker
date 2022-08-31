<script setup>
const gif = useGif()
</script>

<template>
    <img :src="gif || 'https://via.placeholder.com/250.gif?text=GIF'" class="image -thumbnail" />
</template>