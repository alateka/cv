<script setup lang="ts">
defineProps({
  value: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <span class="font-bold text-2xl">{{ value }}</span>
</template>
