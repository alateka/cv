<script setup lang="ts">
defineProps({
  buttons: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <ul>
    <li v-for="button in buttons">
      <span>{{ button.label }}</span>
    </li>
  </ul>
</template>
