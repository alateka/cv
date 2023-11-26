<script setup lang="ts">
import { AppButton } from "@components/index.ts";
import { NavbarInterface } from "@interfaces/index.ts";
import { inject } from "vue";
import { injectionKey } from "@composables/index.ts";
import { AboutMe, Experience } from "@pages/index.ts";

defineProps({
  buttons: {
    type: Array<NavbarInterface>,
    default: [],
  },
});

const injected: any = inject(injectionKey);
injected.currentComponent.value = AboutMe;

const changeComponent = (key: number = 1): void => {
  injected.currentComponent.value = {
    1: AboutMe,
    2: Experience,
  }[key];
};
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
