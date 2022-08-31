<script setup>
const gifs = useGifs()
const model = useModel()
</script>
        
<template>
    <div class="streamDeck" v-bind:class="{ 'XL': model === 2, 'Mini': model === 3 }" v-if="gifs.length > 0">
        <img v-for="gif in gifs" :src="`data:image/png;base64,${gif}`" />
    </div>
</template>

<style scoped>
.streamDeck {
    justify-content: center;
    display: grid;
    grid: 80px 80px 80px / 80px 80px 80px 80px 80px;
}

.XL {
    grid: 80px 80px 80px 80px / 80px 80px 80px 80px 80px 80px 80px 80px;
}

.Mini {
    grid: 80px 80px / 80px 80px 80px;
}
</style>