<script setup lang="ts">
import { AppDisplayFlex } from "@components/index.ts";
</script>

<template>
  <AppDisplayFlex
    class="container_base flex-col md:ml-auto mt-24 md:mt-5 w-full md:w-2/3 md:mr-20 lg:mx-auto mb-32"
  >
    <slot />
  </AppDisplayFlex>
</template>
