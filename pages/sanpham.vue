<template>
  <div
    class="w-full md:grid md:grid-cols-3 auto-cols-max gap-1 items-stretch justify-center bg-stone-300 pt-24 mb-4 h-auto px-2 pb-2"
  >
    <template v-for="item in items" :key="item.id">
      <Card
        :title="item.title"
        :spec="item.spec"
        :content="item.content"
        :imageUrl="item.imageUrl"
      />
    </template>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const route = useRoute();
const { data } = getItems();
const type = ref(route.query.type ? route.query.type : "all");
const items = computed(() => {
  if (type.value === "all") return data;
  return data.filter((item) => item.type === type.value);
});

</script>
