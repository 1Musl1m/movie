<template>
  <div>
    <h1>{{ movie.id }}</h1>
  </div>
</template>

<script setup>
import { useMovieStore } from '~/stores/MovieStore';
import { watchEffect } from 'vue';

const { params } = useRoute().params
const store = useMovieStore()
let currentSlug = ref(null)

const movie = computed(() => {
  if(currentSlug.value) {
    return store.findMovieBySlug(currentSlug.value)
  }
  return null
})

if(store.movies.length === 0) {
  await useAsyncData('movies', () => store.fetchMovies())
}

watchEffect(() => {
  if(params && params.slug) {
    currentSlug.value = params.slug;
  }
})

</script>