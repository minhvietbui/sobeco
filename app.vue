<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
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
onMounted(() => {
  initFlowbite();
});
</script>
