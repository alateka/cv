<script setup lang="ts">
import { AppContainer, AppTitle } from "@components/index.ts";
import { KnowledgeTableContainer } from "@pages/index.ts";
import { useGetDB } from "@composables/index.ts";
</script>

<template>
  <AppContainer>
    <AppTitle class="ml-3 mt-5" :value="useGetDB().knowledge_section.title" />
    <KnowledgeTableContainer />
  </AppContainer>
</template>
