<template>
  <div class="p-8">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-bold">Последние новости</h1>
    </header>
    <main>
        <ul class="flex items-center justify-between flex-wrap">
          <li v-for="article in articles" :key="article.id" class="bg-gray-900 border-gray-950 rounded-lg shadow-md mb-5 p-7">
            <img :src="article.image" alt="Article Image" width="650" height="400" class="object-cover mb-4 rounded-md">
            <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
            <p class="text-gray-700">{{ article.description }}</p>
            <Nuxt-link :to="`/news/${article.id}`" class="text-blue-500 block mt-4">Читать далее</Nuxt-link> 
          </li>
        </ul>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Новости 1',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://w0.peakpx.com/wallpaper/645/696/HD-wallpaper-valley-of-the-end-midday-anime-naruto-statues-manga-uchiha-clan-hashirama-senju-madara-uchiha-valley-of-the-end-midday-senju-clan-first-hokage-waterfall.jpg', 
        },
        {
          id: 2,
          title: 'Новости 2',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://kartinki.pics/uploads/posts/2021-07/1625783726_26-kartinkin-com-p-naruto-protiv-saske-oboi-krasivie-27.jpg', 
        },
      ],
    };
  },
};
</script>
