<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <ul class="list-disc">
    <li class="mb-2" :key="index" v-for="(item, index) in items">
      {{ item }}
    </li>
  </ul>
</template>
