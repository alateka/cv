<script setup lang="ts">
import { AppButton, MenuIcon } from "@components/index.ts";
import { NavbarInterface } from "@interfaces/index.ts";
import { useNavbar } from "@composables/index.ts";
import { ref } from "vue";
defineProps({
  buttons: {
    type: Array<NavbarInterface>,
    default: [],
  },
});

const menuContainer = ref(null);
const { changeComponent, showMenu, toggleMenu, currentSelectedButton } = useNavbar(menuContainer);
</script>

<template>
  <div class="flex flex-col items-center" ref="menuContainer">
    <!-- Button to show / hide menu items -->
    <AppButton @handle-click="toggleMenu" class="block md:hidden">
      <MenuIcon class="fill-emerald-500 dark:fill-emerald-100" />
    </AppButton>

    <!-- Menu items -->
    <ul v-show="showMenu" class="flex flex-col gap-5 items-center">
      <li :key="button.id" v-for="button in buttons">
        <AppButton
          @handle-click="changeComponent(button.id)"
          :value="button.label" :class="currentSelectedButton === button.id ? 'selected_button_on_navbar' : ''"
        />
      </li>
    </ul>
  </div>
</template>
