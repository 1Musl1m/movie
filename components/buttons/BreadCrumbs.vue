<template>
  <div class="block mx-auto">
    <nav class="flex items-center text-white h-20">
        <ul class="flex items-start gap-1 font-medium">
            <li v-for="(item, i) in crumbs" :key="i" class="flex items-center">
                <NuxtLink :to="item.path" class="text-lg hover:text-sky-600 active:text-sky-900 transition-colors">{{ item.name }} /</NuxtLink>
                <span v-if="i < crumbs.length - 1" class="mx-1"></span>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
    computed: {
        crumbs() {
            const params = this.$route.path.substring(1).split('/')

            const crumbs = []

            let path = ''

            crumbs.push({ path: '/', name: 'Главная'})

            params.forEach((param) => {
                path = `${path}/${param}`

                const name = this.$route.meta[param] || param
                
                crumbs.push({ path, name })
            })

            return crumbs
        }
    }
}
</script>