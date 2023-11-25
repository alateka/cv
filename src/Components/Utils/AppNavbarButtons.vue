<script setup lang="ts">
import { AppButton } from "@components/index.ts";
import { NavbarInterface } from "@interfaces/index.ts";

defineProps({
  buttons: {
    type: Array<NavbarInterface>,
    default: [],
  },
});
</script>

<template>
  <ul class="flex flex-col gap-5">
    <li v-for="button in buttons">
      <AppButton
        @handle-click="console.log('click')"
        :label="button.label.toString()"
      />
    </li>
  </ul>
</template>
