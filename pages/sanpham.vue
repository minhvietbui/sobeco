<template>
  <div
    class="w-full md:grid md:grid-cols-3 auto-cols-max gap-1 items-stretch justify-center bg-stone-300 pt-24 mb-4 h-auto px-2 pb-2"
  >
    <template v-for="item in items" :key="item.id">
      <Card
        :id="item.id"
        :title="item.title"
        :spec="item.spec"
        :content="item.content"
        :imageUrl="item.imageUrl"
        :isUser=false
      />
    </template>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const route = useRoute();
const type = parseInt(route.query.type ? route.query.type : 0);
const products = await useFetch('/api/products');
const items = computed(() => {
  if (type === 0) return products.data.value;
  return products.data.value.filter((item) => item.typeId === type);
});
</script>
