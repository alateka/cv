<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
  newTab: {
    type: Boolean,
    default: true,
  },
});

defineEmits(["handleClick"]);
</script>

<template>
  <a :target="newTab ? 'blank' : '#'" :href="href">
    <span>{{ text }}</span>
  </a>
</template>
