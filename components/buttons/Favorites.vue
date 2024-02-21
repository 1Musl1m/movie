<template>
    <div>
        <NuxtLink to="/films">
            <UChip text="3" size="2xl">
                <UButton icon="i-heroicons-heart" color="gray" @click="addItem(id)"/>
            </UChip>
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