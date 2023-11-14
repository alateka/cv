<script setup lang="ts">
import { AppHeader, AppFooter } from "@components/index.ts";
</script>

<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>
