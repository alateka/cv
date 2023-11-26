<script setup lang="ts">
import {
  AppNavbarButtons,
  AppColorSchemeButton,
  AppImg,
} from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <header class="relative">
    <nav class="left_menu">
      <AppImg
        src="Assets/IMG/Face.webp"
        class="w-28"
        :alt="getDataFromDB().alt_selfie"
        href="/"
      />

      <!-- Navbar Buttons -->
      <AppNavbarButtons :buttons="getDataFromDB().navbar" />

      <!-- THEME SWAP (DARK / LIGHT) -->
      <AppColorSchemeButton />
    </nav>
  </header>
</template>
