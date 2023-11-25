<script setup lang="ts">
import {
  AppContainer,
  AppDisplayFlex,
  AppImg,
  AppText,
  AppTitle,
} from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <AppContainer
    class="mx-auto lg:mx-auto md:mr-3 mt-3 w-full md:w-3/4 lg:w-1/2"
  >
    <AppImg src="Assets/IMG/HeaderIMG.webp" imgClass="rounded-xl" />
    <AppDisplayFlex class="flex-col px-7 pb-7">
      <AppTitle class="my-3" :value="getDataFromDB().welcome.toString()" />
      <AppText
        class="my-3"
        :value="getDataFromDB().first_description.toString()"
      />
      <AppText
        class="underline my-3"
        :value="getDataFromDB().languages_used.toString()"
      />
      <AppText
        class="underline"
        :value="getDataFromDB().frameworks_used.toString()"
      />
    </AppDisplayFlex>
  </AppContainer>
</template>
