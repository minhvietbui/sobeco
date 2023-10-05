<template>
  <div
    class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:border-teal-600 hover:border-2 shadow-2xl"
  >
    <button
      v-if="isUser"
      type="button"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-hide="defaultModal"
      @click="$emit('delete', id)"
    >
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Delete</span>
    </button>
    <NuxtImg
      class="rounded-t-lg m-auto h-[180px] w-[170px]"
      :src="imageUrl"
      provider="supabase"
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
const { id, imageUrl, title, spec, content, isUser } = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  content: String,
  spec: Object,
  isUser: Boolean,
});
</script>
