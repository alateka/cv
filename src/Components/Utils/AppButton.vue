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
  <div
    @click="$emit('handleClick')"
    class="cursor-pointer flex items-center base_button"
  >
    <slot />
    <span>{{ label }}</span>
  </div>
</template>
