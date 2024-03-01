<template>
  <div class="mt-10 p-8">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-bold" data-aos="fade-up">Последние новости</h1>
    </header>
    <main>
        <ul class="flex items-center justify-between flex-wrap">
          <li v-for="article in articles" :key="article.id" class="bg-gray-900 border-gray-950 rounded-lg shadow-md mb-5 p-3" data-aos="fade-up">
            <img :src="article.image" alt="Article Image" width="650" height="400" class="object-cover mb-4 rounded-md">
            <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
            <p class="text-gray-700 mb-4">{{ article.description }}</p>
            <UButton color="purple" variant="outline" size="sm"><Nuxt-link :to="`/news/${article.id}`" class="p-1">Читать далее</Nuxt-link></UButton>
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
        {
          id: 3,
          title: 'Новости 3',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://w0.peakpx.com/wallpaper/645/696/HD-wallpaper-valley-of-the-end-midday-anime-naruto-statues-manga-uchiha-clan-hashirama-senju-madara-uchiha-valley-of-the-end-midday-senju-clan-first-hokage-waterfall.jpg', 
        },
        {
          id: 4,
          title: 'Новости 4',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://kartinki.pics/uploads/posts/2021-07/1625783726_26-kartinkin-com-p-naruto-protiv-saske-oboi-krasivie-27.jpg', 
        },
        {
          id: 5,
          title: 'Новости 5',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://w0.peakpx.com/wallpaper/645/696/HD-wallpaper-valley-of-the-end-midday-anime-naruto-statues-manga-uchiha-clan-hashirama-senju-madara-uchiha-valley-of-the-end-midday-senju-clan-first-hokage-waterfall.jpg', 
        },
        {
          id: 6,
          title: 'Новости 6',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://kartinki.pics/uploads/posts/2021-07/1625783726_26-kartinkin-com-p-naruto-protiv-saske-oboi-krasivie-27.jpg', 
        },
        {
          id: 7,
          title: 'Новости 7',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://w0.peakpx.com/wallpaper/645/696/HD-wallpaper-valley-of-the-end-midday-anime-naruto-statues-manga-uchiha-clan-hashirama-senju-madara-uchiha-valley-of-the-end-midday-senju-clan-first-hokage-waterfall.jpg', 
        },
        {
          id: 8,
          title: 'Новости 8',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://kartinki.pics/uploads/posts/2021-07/1625783726_26-kartinkin-com-p-naruto-protiv-saske-oboi-krasivie-27.jpg', 
        },
        {
          id: 9,
          title: 'Новости 9',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://w0.peakpx.com/wallpaper/645/696/HD-wallpaper-valley-of-the-end-midday-anime-naruto-statues-manga-uchiha-clan-hashirama-senju-madara-uchiha-valley-of-the-end-midday-senju-clan-first-hokage-waterfall.jpg', 
        },
        {
          id: 10,
          title: 'Новости 10',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://kartinki.pics/uploads/posts/2021-07/1625783726_26-kartinkin-com-p-naruto-protiv-saske-oboi-krasivie-27.jpg', 
        },
        {
          id: 11,
          title: 'Новости 11',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://w0.peakpx.com/wallpaper/645/696/HD-wallpaper-valley-of-the-end-midday-anime-naruto-statues-manga-uchiha-clan-hashirama-senju-madara-uchiha-valley-of-the-end-midday-senju-clan-first-hokage-waterfall.jpg', 
        },
        {
          id: 12,
          title: 'Новости 12',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://kartinki.pics/uploads/posts/2021-07/1625783726_26-kartinkin-com-p-naruto-protiv-saske-oboi-krasivie-27.jpg', 
        },
        {
          id: 13,
          title: 'Новости 13',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://w0.peakpx.com/wallpaper/645/696/HD-wallpaper-valley-of-the-end-midday-anime-naruto-statues-manga-uchiha-clan-hashirama-senju-madara-uchiha-valley-of-the-end-midday-senju-clan-first-hokage-waterfall.jpg', 
        },
        {
          id: 14,
          title: 'Новости 14',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo obcaecati iusto,',
          image: 'https://kartinki.pics/uploads/posts/2021-07/1625783726_26-kartinkin-com-p-naruto-protiv-saske-oboi-krasivie-27.jpg', 
        },
      ],
    };
  },
};
</script>
