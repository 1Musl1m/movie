<template>
  <div  class="container mt-10 flex flex-col">
    <h1 class="text-3xl font-bold text-center" data-aos="fade-up">Список фильмов</h1>
    <div class="flex items-center justify-between flex-wrap mt-10 px-4">
      <TheMovie v-for="movie of movieStore.movies" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "../stores/MovieStore";

const movieStore = useMovieStore();
</script>