<script setup lang="ts">
defineProps({
  value: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <span>{{ value }}</span>
</template>
