<template>
    <div>
        <ul class="flex items-start flex-wrap gap-2">
            <li v-for="movie in movies" :key="movie.id" class="text-lg mt-6 text-purple-300" data-aos="fade-up">
                <NuxtLink :to="`/movies/${movie.slug}`">
                    <div class="border-1 rounded-xl bg-gray-900 border-gray-950 p-4">
                        <img :src="movie.path" :alt="movie.name"
                        class="w-64 h-80 flex items-center justify-center rounded-xl">
                        <h2 class="pt-2 text-white">
                        {{ movie.name }}
                        </h2>
                        <p class="text-sm text-gray-500 py-4">{{ movie.title }}</p>
                        <div class="flex items-center justify-between">
                            <UButton label="Посмотреть" color="violet" variant="outline" size="lg" v-if="!movie.isWatched" ></UButton>
                            <UButton label="Просмотренно" color="violet" variant="outline" size="lg" v-else></UButton>
                            <div>
                                <UButton 
                                    icon="i-heroicons-heart"
                                    size="xl"
                                    color="white"
                                    square
                                    variant="link"
                                    class="hover:text-red-500 active:text-red-700 p-0 m0"
                                >
                                </UButton>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useMovieStore } from "~/stores/MovieStore";

const store = useMovieStore()

const movies = computed(() => store.movies)

if (store.movies.length === 0) {
    await useAsyncData('movies', () => store.fetchMovies())
}
</script>