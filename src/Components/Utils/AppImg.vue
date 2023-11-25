<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "#",
  },
  imgClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a :href="href" :class="href === '#' ? 'cursor-default' : ''">
    <img :class="imgClass" :src="src" :alt="alt" />
  </a>
</template>
