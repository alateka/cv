<script setup lang="ts">
import { AppNavbarButtons, AppLogo } from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <header>
    <nav class="navbar">
      <AppLogo />
      <AppNavbarButtons :buttons="getDataFromDB().navbar" />
    </nav>
  </header>
</template>
