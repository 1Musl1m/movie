// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },  
  app: {
    head: {
      meta: [{
        name: 'description',
        content: 'Movies',
      }],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Ashanti Movie',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-aos',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@/assets/style/tailwind.css',
    '@/assets/style/main.css',
  ],
})
