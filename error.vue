<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Oooops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <NuxtLink to="/"><button class="btn my-7">Go Home...</button></NuxtLink>
    </div>
</template>

<script setup>
    import { NuxtError } from '#app'

    defineProps({
        error: NuxtError
    })
</script>

<style scoped>

</style>