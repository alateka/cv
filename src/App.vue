<script setup lang="ts">
import { AppBody } from "@components/index.ts";
import { provide, shallowRef } from "vue";
import { injectionKey } from "@composables/index.ts";

const currentComponent = shallowRef();
provide(injectionKey, {
  currentComponent,
});
</script>

<template>
  <AppBody>
    <component :is="currentComponent" />
  </AppBody>
</template>
