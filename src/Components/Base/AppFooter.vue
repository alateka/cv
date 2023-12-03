<script setup lang="ts">
import {
  ContactIcon,
  AppDisplayFlex,
  AppText,
  AppLink,
  AppColorSchemeButton,
} from "@components/index.ts";
import { getDataFromDB } from "@composables/index.ts";
</script>

<template>
  <footer class="footer">
    <!-- CONTACT DATA -->
    <AppDisplayFlex class="items-center">
      <ContactIcon class="mr-3 w-9" />
      <AppDisplayFlex class="flex-col">
        <AppText :value="getDataFromDB().full_name" />
        <AppText :value="getDataFromDB().mobile" />
      </AppDisplayFlex>
    </AppDisplayFlex>

    <!-- THEME SWAP (DARK / LIGHT) -->
    <AppColorSchemeButton class="ml-3" />

    <!-- LICENSE -->
    <AppDisplayFlex class="hidden lg:block my-auto">
      <AppLink
        :text="getDataFromDB().creative_commons.text"
        :href="getDataFromDB().creative_commons.link"
      />
    </AppDisplayFlex>
  </footer>
</template>
