<script setup lang="ts">
import { AppDisplayFlex, AppNavbar } from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <header>
    <nav>
      <a href="index.html">
        <img
          id="img_avatar"
          src="@assets/IMG/Avatar.webp"
          alt="Inicio de la web"
        />
      </a>
      <AppDisplayFlex>
        <AppNavbar :buttons="getDataFromDB('navbar')" />
      </AppDisplayFlex>
    </nav>
  </header>
</template>
