import { inject, ref, onMounted, onBeforeUnmount } from "vue";
import { injectionKey } from "@composables/index.ts";
import { AboutMe, Experience, Knowledge, Skills } from "@pages/index.ts";

export const useNavbar = () => {
  // Get injection key to save current page
  const injected: any = inject(injectionKey);

  // Default about me page
  injected.currentComponent.value = AboutMe;

  // Variables used to mobile screens
  const showMenu = ref(true);

  // Used to show navigation on mobile screen
  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };

  // Switch page
  const changeComponent = (key: number = 1): void => {
    injected.currentComponent.value = {
      1: AboutMe,
      2: Experience,
      3: Knowledge,
      4: Skills,
    }[key];
  };

  // Function to detect if screen is changing
  const handleResize = () => {
    showMenu.value = window.innerWidth < 768 ? false : true;
  };

  // Add listeners on mount
  onMounted(() => {
    if (window.innerWidth < 768) showMenu.value = false;

    window.addEventListener("resize", handleResize);
  });

  // Remove listeners on unmount
  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });

  // Export functions & variables
  return {
    // Functions
    changeComponent,
    toggleMenu,

    // Variables
    showMenu,
  };
};
