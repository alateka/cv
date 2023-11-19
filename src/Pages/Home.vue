<script setup lang="ts">
import { AppBody, AppContainer } from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <AppBody>
    <AppContainer class="m-9">
      <span> {{ getDataFromDB().first_description }}</span>
    </AppContainer>
  </AppBody>
</template>
