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
    <AppDisplayFlex class="flex-col">
      <AppTitle class="m-5" :value="useGetDB().welcome" />
      <AppSpaceBar class="border-2" />
      <AppText class="m-5" :value="useGetDB().first_description" />
      <AppText class="underline mt-3 mx-5" :value="useGetDB().languages_used" />
      <AppText
        class="underline mx-5 mb-5 mt-3"
        :value="useGetDB().frameworks_used"
      />
    </AppDisplayFlex>
  </AppDisplayFlex>
</template>
