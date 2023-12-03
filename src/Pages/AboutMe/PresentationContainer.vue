<script setup lang="ts">
import {
  AppDisplayFlex,
  AppImg,
  AppSpaceBar,
  AppText,
  AppTitle,
} from "@components/index.ts";
import { useGetDB } from "@composables/index.ts";
</script>

<template>
  <AppDisplayFlex class="flex-col">
    <AppImg
      src="assets/img/header_img.webp"
      imgClass="rounded-t-lg border_base"
    />
    <AppDisplayFlex class="flex-col px-7 pb-7">
      <AppTitle class="my-3" :value="useGetDB().welcome" />
      <AppSpaceBar />
      <AppText class="my-3" :value="useGetDB().first_description" />
      <AppText class="underline my-3" :value="useGetDB().languages_used" />
      <AppText class="underline" :value="useGetDB().frameworks_used" />
    </AppDisplayFlex>
  </AppDisplayFlex>
</template>
