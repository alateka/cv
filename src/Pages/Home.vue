<script setup lang="ts">
import { Body } from "@components/index.ts";

defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <Body>
    <h1>La página inicio</h1>
  </Body>
</template>
