<script setup lang="ts">
import {
  AppNavbarButtons,
  AppLogo,
  AppColorSchemeButton,
} from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <header class="relative">
    <nav class="left_menu">
      <AppLogo />

      <!-- Navbar Buttons -->
      <AppNavbarButtons :buttons="getDataFromDB().navbar" />

      <!-- THEME SWAP (DARK / LIGHT) -->
      <AppColorSchemeButton />
    </nav>
  </header>
</template>
