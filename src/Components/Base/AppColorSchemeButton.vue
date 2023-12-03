<script setup lang="ts">
import {
  AppButton,
  LightModeIcon,
  DarkModeIcon,
  AppDisplayFlex,
  AppText,
} from "@components/index.ts";
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

const setDarkTheme = (): void => {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  isDarkMode.value = true;
};

const setLightTheme = (): void => {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  isDarkMode.value = false;
};
</script>

<template>
  <!-- THEME SWAP (DARK / LIGHT) -->
  <AppDisplayFlex class="flex items-center">
    <AppButton v-show="!isDarkMode" @handle-click="setDarkTheme()">
      <DarkModeIcon class="fill-emerald-500" />
      <AppText class="ml-2" value="Oscuro" />
    </AppButton>
    <AppButton v-show="isDarkMode" @handle-click="setLightTheme()">
      <LightModeIcon class="fill-emerald-100" />
      <AppText class="ml-2" value="Claro" />
    </AppButton>
  </AppDisplayFlex>
</template>
