<template>
  <div
    class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-teal-600 hover:border-4"
  >
    <img
      class="rounded-t-lg m-auto h-[180px] w-[170px]"
      :src="imageUrl"
      alt=""
    />

    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
        >
          {{ title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ content }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const { imageUrl, title, spec, content } = defineProps({
  imageUrl: String,
  title: String,
  content: String,
  spec: Object,
});
</script>
