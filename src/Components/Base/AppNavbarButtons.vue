<script setup lang="ts">
import { AppButton, AppDisplayFlex, MenuIcon } from "@components/index.ts";
import { NavbarInterface } from "@interfaces/index.ts";
import { useNavbar } from "@composables/index.ts";

defineProps({
  buttons: {
    type: Array<NavbarInterface>,
    default: [],
  },
});

const { changeComponent, toggleMenu, showMenu } = useNavbar();
</script>

<template>
  <AppDisplayFlex class="flex-col items-center">
    <!-- Button to show / hide menu items -->
    <AppButton @handle-click="toggleMenu" class="block md:hidden">
      <MenuIcon class="fill-emerald-500 dark:fill-emerald-100" />
    </AppButton>

    <!-- Menu items -->
    <ul v-show="showMenu" class="flex flex-col gap-5 items-center">
      <li :key="button.id" v-for="button in buttons">
        <AppButton
          @handle-click="changeComponent(button.id)"
          :value="button.label"
        />
      </li>
    </ul>
  </AppDisplayFlex>
</template>
