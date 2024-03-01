<template>
  <div class="container mt-10 p-8 mx-auto dark:bg-gray-900">
    <h1 class="text-2xl font-bold mb-8">Уведомления</h1>
    <div v-if="notifications.length === 0" class="text-gray-600">
      Нет новых уведомлений.
    </div>
    <div v-else>
      <div v-for="notification in notifications" :key="notification.id" class="mb-4 p-4 rounded">
        <h2 class="text-lg font-bold mb-2">{{ notification.title }}</h2>
        <p>{{ notification.message }}</p>
        <small class="text-gray-500">{{ notification.timestamp }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          id: 1,
          title: 'Новое уведомление',
          message: 'Содержание уведомления...',
          timestamp: '2024-03-01 12:00',
        },
      ],
    };
  },
};
</script>

