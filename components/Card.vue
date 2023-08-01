<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-teal-600 hover:border-4"
  >
    <a href="#">
      <img class="rounded-t-lg" :src="imageUrl" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ title }}
        </h5>
      </a>
      <h6 class="dark:text-gray-100 font-normal text-gray-100">{{ type }}</h6>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ content }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const { imageUrl, title, type, content } = defineProps({
  imageUrl: String,
  title: String,
  content: String,
  type: String,
});
</script>
