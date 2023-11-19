<script setup lang="ts">
import {
  AppNavbarButtons,
  AppLogo,
  AppDisplayFlex,
  AppButton,
  LightMode,
  DarkMode,
} from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
import { ref } from "vue";

// Set themes (Dark / Light)
const isDarkMode = ref(true);

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  isDarkMode.value = true;
} else {
  document.documentElement.classList.remove("dark");
  isDarkMode.value = false;
}

const setDarkTheme = () => {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  isDarkMode.value = true;
};

const setLightTheme = () => {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  isDarkMode.value = false;
};
</script>

<template>
  <header>
    <nav class="navbar">
      <AppLogo />

      <!-- Navbar Buttons -->
      <AppNavbarButtons :buttons="getDataFromDB().navbar" />

      <!-- THEME SWAP (DARK / LIGHT) -->
      <AppDisplayFlex class="flex items-center">
        <AppButton
          v-show="!isDarkMode"
          label="Modo Oscuro"
          @handle-click="setDarkTheme()"
        >
          <DarkMode class="mr-3" />
        </AppButton>
        <AppButton
          v-show="isDarkMode"
          label="Modo Claro"
          @handle-click="setLightTheme()"
        >
          <LightMode class="fill-white mr-3" />
        </AppButton>
      </AppDisplayFlex>
    </nav>
  </header>
</template>
