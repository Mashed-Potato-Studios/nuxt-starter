<script setup lang="ts">
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const props = defineProps<{
    product: Product;
}>();
</script>
<template>
  <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{{ props.product.name }}</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ props.product.description }}</p>
    </div>

    <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR">

    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 class="text-lg font-bold text-white">{{ props.product.price }}</h1>
        <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
    </div>
</div>
</template>