<script setup lang="ts">
export interface User {
    name: string;
    email: string;
    avatar: string;
    description?: string;
    role: string;
}
const props = defineProps<{
    user: User;
}>();
</script>
<template>
  <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img class="object-cover w-full h-56" :src="props.user.avatar" :alt="props.user.name">

    <div class="py-5 text-center">
        <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{{props.user.name'
            }}</a>
        <span class="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
    </div>
</div>
</template>