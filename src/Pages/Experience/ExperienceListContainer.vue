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
  <AppDisplayFlex class="flex-col">
    <AppTitle class="mt-5 mx-5" :value="useGetDB().experience_section.title" />
    <AppDisplayFlex
      class="flex-col"
      :key="index"
      v-for="(experience, index) in useGetDB().experience_section.list"
    >
      <AppSpaceBar class="my-7 border-2" />
      <AppText
        class="font-bold underline mx-5"
        :value="experience.company_name"
      />
      <AppText class="underline mb-3 mx-5" :value="experience.duration" />
      <AppText class="font-bold mx-5" :value="experience.description" />
      <AppList class="ml-9 mx-5" :items="experience.tasks" />
    </AppDisplayFlex>
  </AppDisplayFlex>
</template>
