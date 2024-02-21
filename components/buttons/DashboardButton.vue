<script setup lang="ts">
const isOpen = ref(false)

const route = useRoute()

const links = [
  [{
    id: 1,
    label: 'User',
    avatar: {
      src: 'https://pm1.aminoapps.com/8061/a7c0315915d58c70de5abf197d1e3ee7613ee1dfr1-736-736v2_hq.jpg',
    },
  }], [{
    id: 2,
    label: 'Главная',
    icon: 'i-heroicons-home',
    to: '/'
  },{
    id: 3,
    label: 'Друзья',
    icon: 'i-heroicons-users-solid',
    to: '/options/friends',
  }, {
    id: 4,
    label: 'Уведомления',
    icon: 'i-heroicons-bell',
    to: '/options/notifications'
  }, {
    id: 5,
    label: 'Избранное',
    icon: 'i-heroicons-heart',
    to: '/options/favorites'
  }, {
    id: 6,
    label: 'Фильмы',
    icon: 'i-heroicons-play-solid',
    to: "/options/films"
  }, {
    id: 7,
    label: 'Комната',
    icon: 'i-heroicons-cube-transparent-solid',
    to: '/options/cinema-room',
  }, {
    id: 8,
    label: 'История',
    icon: 'i-heroicons-globe-alt',
    to: '/options/history',
  }, {
    id: 9,
    label: 'Настройки',
    icon: 'i-heroicons-cog-20-solid',
    to: '/options/settings'
  }], [{
    id: 10,
    label: 'Примеры',
    icon: 'i-heroicons-light-bulb'
  }, {
    id: 11,
    label: 'Помощь',
    icon: 'i-heroicons-question-mark-circle'
  }]
]
</script>

<template>
    <div>
      <UButton icon="i-heroicons-bars-3" color="gray" @click="isOpen = true" />
  
        <USlideover v-model="isOpen" 
                    :ui="{
                      width: 'max-w-80',

                    }">
            <div class="p-2">
                <UVerticalNavigation 
                    :links="links"
                    :ui="{
                        avatar: {
                            size: 'xl',

                        },
                        label: 'text-lg',
                    }"
                  />
            </div>
      </USlideover>
    </div>
</template>