<template>
  <div>
    <h1>Movie details for {{ id }}</h1>
  </div>
</template>

<script setup>
const { id } = useRoute().params

if(!movie.id) {
  throw createError({
      statusCode: 404,
      statusMessage: 'В каталоге нет такого фильма'
  })
}
</script>