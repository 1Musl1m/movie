<template>
    <header class="p-24 flex flex-col gap-7" 
            data-aos="fade-up">
        <h1 class="text-6xl tracking-widest">Фильмы, сериалы,<br/> мультфильмы в одном месте!</h1>
        <div>{{ data }}</div>
        <div class="w-3/6">
            <p class="text-xl">Всегда хотели узнать где можно дешевле посмотреть то или иное произведение исскуства? Просто обсудить какую-либо кинофраншизу? А может просто посмотреть последние новости в сфере кино? Тогда, данный сайт был сделан для вас!</p>  
        </div>
        <NuxtLink to="/films"><button class="bg-violet-200 hover:bg-purple-950 text-violet-600 hover:text-violet-200 w-1/4 h-20 rounded-2xl transition duration-700"><span class="text-xl">Посмотреть каталог фильмов</span></button></NuxtLink>
    </header>
</template>

<script setup>
const { data } = await useFetch('/api/ashanti?name=ashab')
</script>