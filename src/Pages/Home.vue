<script setup lang="ts">
import { AppBody } from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <AppBody>
    <span> {{ getDataFromDB().first_description }}</span>
  </AppBody>
</template>
