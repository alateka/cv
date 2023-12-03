<script setup lang="ts">
import { AppDisplayFlex } from "@components/index.ts";
</script>

<template>
  <AppDisplayFlex
    class="container_base flex-col mx-auto lg:mx-auto md:ml-44 mt-3 w-full md:w-3/4 lg:w-1/2"
  >
    <slot />
  </AppDisplayFlex>
</template>
