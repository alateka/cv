<script setup lang="ts">
import { AppHeader, AppFooter } from "@components/index.ts";
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
