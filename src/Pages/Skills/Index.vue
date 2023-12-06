<script setup lang="ts">
import { AppContainer, AppTitle, AppSpaceBar } from "@components/index.ts";
import { SkillsListContainer } from "@pages/index.ts";
import { useGetDB } from "@composables/index.ts";
</script>

<template>
  <AppContainer>
    <AppTitle class="m-5" :value="useGetDB().skills_section.title" />
    <AppSpaceBar class="border-2" />
    <SkillsListContainer :list="useGetDB().skills_section.list" />
  </AppContainer>
</template>
