<script setup lang="ts">
import {
  ContactIcon,
  AppDisplayFlex,
  AppText,
  AppLink,
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
      <AppLink
        :text="getDataFromDB().creative_commons.text.toString()"
        :href="getDataFromDB().creative_commons.link.toString()"
      />
    </AppDisplayFlex>
  </footer>
</template>
