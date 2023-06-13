<script setup lang="ts">
import { SITE, timezone } from "~/config"
useHead({
    title: SITE.name,
    titleTemplate: (title) => title ? `${title} - ${SITE.name}` : SITE.name,
    meta: [
        { name: 'description', content: `${SITE.description}`},
    ]
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
