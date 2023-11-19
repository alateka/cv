<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
});

defineEmits(["handleClick"]);
</script>

<template>
  <div @click="$emit('handleClick')" class="cursor-pointer">
    <span>{{ label }}</span>
  </div>
</template>
