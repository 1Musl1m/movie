<template>
  <form @submit.prevent="submitForm">
    <!-- Ваши поля формы -->
    <button type="submit">Отправить</button>
  </form>
</template>

<script>
export default {
    methods: {
        async submitForm() {
        // Получите данные из формы
            const formData = {
            // Ваши данные формы
            };

        // Отправьте запрос к серверу
            try {
                const response = await this.$axios.post('/submitForm', formData);
                console.log(response.data); // Вывод успешного ответа
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
            }
        },
    },
};
</script>
