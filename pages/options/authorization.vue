<template>
  <div>
    <UContainer class="grid place-content-center h-screen">
      <UCard class="w-[500px]">

        <template #header>
          <h2 class="text-xl font-bold">
            Регистрация
          </h2>
        </template>

        <UForm :validate="validate" :state="formState"  @submit="onSubmit">

          <UFormGroup name="name" label="Name">
            <UInput type="text" color="purple" v-model="formState.name" placeholder="name"></UInput>
          </UFormGroup>

          <UFormGroup name="email" label="Email" class="mt-4">
            <UInput type="text" color="purple" v-model="formState.email" placeholder="email@gmail.com"></UInput>
          </UFormGroup>

          <UFormGroup name="password" label="Password" class="mt-4">
            <UInput type="password" color="purple" v-model="formState.password"></UInput>
          </UFormGroup>

          <UFormGroup name="passwordConfirm" label="Confirm Password" class="mt-4">
            <UInput type="passwordConfirm" color="purple" v-model="formState.passwordConfirm"></UInput>
          </UFormGroup>

          <UButton class="mt-4" type="submit">Войти</UButton>
        </UForm>
      </UCard>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '#ui/types'


const formState = reactive({
  email: undefined,
  name: undefined,
  password: undefined,
  passwordConfirm: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  if (!state.passwordConfirm) errors.push({ path: 'passwordConfirm', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>

<style>

</style>