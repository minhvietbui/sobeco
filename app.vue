<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Sobeco",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/sobeco.ico",
    },
  ],
});
</script>
