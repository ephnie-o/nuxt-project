<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products" :key="p.id">
            <ProductCard :product="p" />
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt Project Products',
        meta: [
            { name: 'description', content: 'Nuxt Products List' }
        ]
    })
</script>

<style scoped>

</style>