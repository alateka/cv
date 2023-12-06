import { inject } from "vue";
import { injectionKey } from "@composables/index.ts";
import { AboutMe, Experience, Knowledge, Skills } from "@pages/index.ts";

/**
 * @returns changeComponent()
 */
export const useNavbar = () => {
  // Get injection key to save current page
  const injected: any = inject(injectionKey);

  // Default about me page
  injected.currentComponent.value = AboutMe;

  // Switch page
  const changeComponent = (key: number = 1): void => {
    injected.currentComponent.value = {
      1: AboutMe,
      2: Experience,
      3: Knowledge,
      4: Skills,
    }[key];
  };

  // Export functions & variables
  return {
    // Functions
    changeComponent,
  };
};
