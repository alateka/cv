<script setup lang="ts">
import { AppDisplayFlex } from "@components/index.ts";
</script>

<template>
  <AppDisplayFlex
    class="container_base flex-col ml-auto mr-3 mt-3 w-full md:w-2/3 md:mr-20 lg:mx-auto mb-32"
  >
    <slot />
  </AppDisplayFlex>
</template>
