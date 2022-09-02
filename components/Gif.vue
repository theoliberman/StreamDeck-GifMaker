<script setup>
const gif = useGif()
</script>

<template>
    <div>
        <img :src="gif || 'https://via.placeholder.com/250.gif?text=GIF'" />
    </div>
</template>