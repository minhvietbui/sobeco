<template>
  <div class="flex overflow-x-auto mt-24 pb-96">
    <table class="w-2/3 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Title</th>
          <th scope="col" class="px-6 py-3">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="item in types.data"
          :key="item.id"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.id }}
          </th>
          <td class="px-6 py-4">
            {{ item.title }}
          </td>
          <td class="px-6 py-4">
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              @click="deleteType(item.id)"
            >
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                Delete
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <CreateType @create="createType" />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
const types = ref();

types.value = await useFetch('/api/types');
const deleteType = async (id: string) => {
  const result = await useFetch(`/api/types?id=${id}`, { method: 'delete' });
  if (result) {
    types.value = await useFetch('/api/types');
  }
};

const createType = async (title) => {
  const newType = await useFetch('/api/types', {
    method: 'post',
    body: { data: { title: title } },
  });
  if (newType) {
    types.value = await useFetch('/api/types');
  }
};
</script>
