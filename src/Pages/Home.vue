<script setup lang="ts">
import { AppContainer, AppImg, AppText, AppTitle } from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <AppContainer class="ml-auto lg:mx-auto w-3/4 lg:w-1/2 mr-7 mt-3">
    <AppImg
      src="img/MiCareto.webp"
      class="w-52 mx-auto pt-28"
      alt="La foto de mi careto"
    />
    <AppTitle :value="getDataFromDB().welcome.toString()" />
    <AppText :value="getDataFromDB().languages_used.toString()" />
    <AppText :value="getDataFromDB().frameworks_used.toString()" />
    <AppText :value="getDataFromDB().first_description.toString()" />
  </AppContainer>
</template>
