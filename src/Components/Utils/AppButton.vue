<script setup lang="ts">
defineProps({
  value: {
    type: String,
    default: "",
  },
});

defineEmits(["handleClick"]);
</script>

<template>
  <div
    @click="$emit('handleClick')"
    class="cursor-pointer flex items-center base_button"
  >
    <slot />
    <span>{{ value }}</span>
  </div>
</template>
