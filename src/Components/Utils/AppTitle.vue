<script setup lang="ts">
defineProps({
  value: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <span class="text-2xl">{{ value }}</span>
</template>
