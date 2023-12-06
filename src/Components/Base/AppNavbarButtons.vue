<script setup lang="ts">
import { AppButton } from "@components/index.ts";
import { NavbarInterface } from "@interfaces/index.ts";
import { useNavbar } from "@composables/index.ts";

defineProps({
  buttons: {
    type: Array<NavbarInterface>,
    default: [],
  },
});

const { changeComponent } = useNavbar();
</script>

<template>
  <ul class="flex flex-col gap-5">
    <li :key="button.id" v-for="button in buttons">
      <AppButton
        @handle-click="changeComponent(button.id)"
        :label="button.label"
      />
    </li>
  </ul>
</template>
