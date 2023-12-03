<script setup lang="ts">
import {
  AppButton,
  LightModeIcon,
  DarkModeIcon,
  AppDisplayFlex,
  AppText,
} from "@components/index.ts";
import { useColorScheme } from "@composables/index.ts";

const { setDarkTheme, setLightTheme, isDarkMode } = useColorScheme(false);
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
