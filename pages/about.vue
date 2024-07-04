<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur labore repellat accusantium minus excepturi, maiores dicta est quae nam explicabo voluptatibus fugit. Vero illo natus qui asperiores tempora sunt provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo at sapiente expedita provident harum deleniti alias laudantium enim! Minus, quisquam eos unde repellat voluptatum dignissimos praesentium distinctio velit delectus!</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/firstnuxt?name=Stephanie', {
    //     method: 'post',
    //     body: { age: 30 }
    // })

    // const { data2 } = await useFetch('/api/firstnuxt')

    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>