<script setup lang="ts">
import { AppDisplayFlex, AppList } from "@components/index.ts";

defineProps({
  list: {
    type: Array<string>,
    default: [],
  },
});
</script>

<template>
  <AppDisplayFlex class="p-7 flex-col">
    <AppList class="ml-5" :items="list" />
  </AppDisplayFlex>
</template>
