<template>
    <div>
        <NuxtLink to="/films">
            <UButton icon="i-heroicons-heart" color="gray" @click="addItem(id)"/>
        </NuxtLink>
    </div>
</template>
<script setup>
defineProps({
    id: Number
})

const addItem = (id) => {
    // TODO 
}
</script>