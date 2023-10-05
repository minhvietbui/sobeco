<template>
  <div class="pt-24">
    <CreateProduct :types="types" />
  </div>
  <div
    class="w-full md:grid md:grid-cols-3 auto-cols-max gap-1 items-stretch justify-center pt-3 bg-stone-300 mb-4 h-auto px-2 pb-2"
  >
    <template v-for="item in products.data" :key="item.id">
      <Card
        :id="item.id"
        :title="item.name"
        :spec="item.spec"
        :content="item.content"
        :imageUrl="item.imageUrl"
        :isUser=true
        @delete="deleteProduct"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  middleware: 'auth',
});
const products = ref();
const types = ref();
products.value = await useFetch('/api/products');
types.value = await useFetch('/api/types');

async function deleteProduct(id: string) {
  await useFetch(`/api/products?id=${id}`, { method: 'delete'});
  products.value = await useFetch('/api/products');
}
</script>
