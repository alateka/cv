<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
});
</script>

<template>
  <span>{{ value }}</span>
</template>
