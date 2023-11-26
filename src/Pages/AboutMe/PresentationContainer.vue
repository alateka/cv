<script setup lang="ts">
import {
  AppDisplayFlex,
  AppImg,
  AppText,
  AppTitle,
} from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <AppDisplayFlex class="flex-col">
    <AppImg src="Assets/IMG/HeaderIMG.webp" imgClass="rounded-xl" />
    <AppDisplayFlex class="flex-col px-7 pb-7">
      <AppTitle class="my-3" :value="getDataFromDB().welcome" />
      <AppText class="my-3" :value="getDataFromDB().first_description" />
      <AppText class="underline my-3" :value="getDataFromDB().languages_used" />
      <AppText class="underline" :value="getDataFromDB().frameworks_used" />
    </AppDisplayFlex>
  </AppDisplayFlex>
</template>
