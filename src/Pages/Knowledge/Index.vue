<script setup lang="ts">
import { AppContainer, AppTitle, AppSpaceBar } from "@components/index.ts";
import { KnowledgeTableContainer } from "@pages/index.ts";
import { useGetDB } from "@composables/index.ts";
</script>

<template>
  <AppContainer>
    <AppTitle class="ml-3 my-5" :value="useGetDB().knowledge_section.title" />
    <AppSpaceBar class="border-2" />
    <KnowledgeTableContainer
      :columns="useGetDB().knowledge_section.columns"
      :rows="useGetDB().knowledge_section.rows"
    />
  </AppContainer>
</template>
