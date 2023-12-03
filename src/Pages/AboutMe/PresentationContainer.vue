<script setup lang="ts">
import {
  AppDisplayFlex,
  AppImg,
  AppSpaceBar,
  AppText,
  AppTitle,
} from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <AppDisplayFlex class="flex-col">
    <AppImg src="assets/img/header_img.webp" imgClass="rounded-xl" />
    <AppDisplayFlex class="flex-col px-7 pb-7">
      <AppTitle class="my-3" :value="getDataFromDB().welcome" />
      <AppSpaceBar />
      <AppText class="my-3" :value="getDataFromDB().first_description" />
      <AppText class="underline my-3" :value="getDataFromDB().languages_used" />
      <AppText class="underline" :value="getDataFromDB().frameworks_used" />
    </AppDisplayFlex>
  </AppDisplayFlex>
</template>
