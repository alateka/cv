<script setup lang="ts">
import {
  ContactIcon,
  CreativeCommonsIcon,
  AppDisplayFlex,
  AppText,
} from "@components/index.ts";

import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <footer class="footer">
    <AppDisplayFlex class="items-center">
      <ContactIcon class="mr-3 w-9" />
      <AppDisplayFlex class="flex-col">
        <AppText :value="getDataFromDB().full_name.toString()" />
        <AppText :value="getDataFromDB().mobile.toString()" />
      </AppDisplayFlex>
    </AppDisplayFlex>
    <AppDisplayFlex class="items-center">
      <CreativeCommonsIcon class="mr-3" />
      <AppText :value="getDataFromDB().creative_commons_text.toString()" />
    </AppDisplayFlex>
  </footer>
</template>
