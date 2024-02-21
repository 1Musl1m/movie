<script setup lang="ts">
const items = [
  'https://i.pinimg.com/474x/a2/69/d6/a269d65b7ed912b263b190dbf653f3d1.jpg',
  'https://i.pinimg.com/236x/81/10/c2/8110c2ae7e5e2101321b9b058f35611c.jpg',
  'https://i.artfile.ru/2880x1800_828869_[www.ArtFile.ru].jpg',
  'https://kartinki.pics/uploads/posts/2021-07/1625794410_38-kartinkin-com-p-krasivie-arti-po-naruto-art-krasivo-39.jpg',
  'https://img.goodfon.ru/wallpaper/big/e/a2/anime-art-naruto-naruto-3947.jpg',
  'https://ir.ozone.ru/s3/multimedia-v/c1000/6208236523.jpg'
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg'
    }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: '-left-12'
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-right-12'
    }"
    arrows
    class="w-64 mx-auto"
  >
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</template>