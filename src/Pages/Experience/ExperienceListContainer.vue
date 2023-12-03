<script setup lang="ts">
import {
  AppDisplayFlex,
  AppList,
  AppSpaceBar,
  AppText,
  AppTitle,
} from "@components/index.ts";
import { useGetDB } from "@composables/index.ts";
</script>

<template>
  <AppDisplayFlex class="p-7 flex-col">
    <AppTitle :value="useGetDB().experience_section.title" />
    <AppDisplayFlex
      class="flex-col"
      :key="index"
      v-for="(experience, index) in useGetDB().experience_section.list"
    >
      <AppSpaceBar class="my-7" />
      <AppText class="font-bold underline" :value="experience.company_name" />
      <AppText class="underline mb-3" :value="experience.duration" />
      <AppText class="font-bold" :value="experience.description" />
      <AppList class="ml-5" :items="experience.tasks" />
    </AppDisplayFlex>
  </AppDisplayFlex>
</template>
