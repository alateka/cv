<script setup lang="ts">
import { AppNavbarButtons, AppImg } from "@components/index.ts";
import { useGetDB } from "@composables/index.ts";
</script>

<template>
  <header class="relative">
    <nav class="navbar">
      <!-- Profile photo -->
      <AppImg
        src="assets/img/face.webp"
        class="w-28 hidden md:block"
        imgClass="rounded-full border_base"
        :alt="useGetDB().alt_selfie"
        href="/"
      />

      <!-- Navbar Buttons -->
      <AppNavbarButtons :buttons="useGetDB().navbar" />
    </nav>
  </header>
</template>
