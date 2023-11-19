<script setup lang="ts">
import { AppHeader, AppFooter } from "@components/index.ts";
</script>

<template>
  <div class="base_body">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
