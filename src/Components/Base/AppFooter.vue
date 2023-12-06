<script setup lang="ts">
import {
  ContactIcon,
  AppDisplayFlex,
  AppText,
  AppLink,
  AppColorSchemeButton,
} from "@components/index.ts";
import { useGetDB } from "@composables/index.ts";
</script>

<template>
  <footer class="footer">
    <!-- CONTACT DATA -->
    <AppDisplayFlex class="items-center">
      <ContactIcon class="mr-3 w-9" />
      <AppDisplayFlex class="flex-col">
        <AppText :value="useGetDB().contact.full_name" />
        <AppText :value="useGetDB().contact.mobile" />
        <AppText :value="useGetDB().contact.email" />
      </AppDisplayFlex>
    </AppDisplayFlex>

    <!-- THEME SWAP (DARK / LIGHT) -->
    <AppColorSchemeButton class="ml-3" />

    <!-- LICENSE -->
    <AppDisplayFlex class="hidden lg:block my-auto">
      <AppLink
        :text="useGetDB().creative_commons.text"
        :href="useGetDB().creative_commons.link"
      />
    </AppDisplayFlex>
  </footer>
</template>
