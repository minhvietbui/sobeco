<template>
  <div
    class="w-full grid grid-cols-3 auto-cols-max gap-1 items-stretch justify-center bg-stone-300 pt-24"
  >
    <template v-for="item in data" :key="item.id">
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
const { data } = getItems();
</script>
