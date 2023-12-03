<script setup lang="ts">
import { AppNavbarButtons, AppImg } from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <header class="relative">
    <nav class="left_menu">
      <!-- Profile photo -->
      <AppImg
        src="assets/img/face.webp"
        class="w-28"
        :alt="getDataFromDB().alt_selfie"
        href="/"
      />

      <!-- Navbar Buttons -->
      <AppNavbarButtons :buttons="getDataFromDB().navbar" />
    </nav>
  </header>
</template>
