import { ref } from "vue";

/**
 *
 * @param auto Actives the auto change of color scheme
 * @returns setDarkTheme, setLightTheme, isDarkMode
 */
export const useColorScheme = (auto: boolean = true) => {
  // Set themes (Dark / Light)
  const isDarkMode = ref(false);

  // Check auto
  if (auto)
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      isDarkMode.value = true;
    } else {
      document.documentElement.classList.remove("dark");
      isDarkMode.value = false;
    }

  // To dark mode
  const setDarkTheme = (): void => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    isDarkMode.value = true;
  };

  // To light mode
  const setLightTheme = (): void => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    isDarkMode.value = false;
  };

  // Export functions & variables
  return {
    // Functions
    setDarkTheme,
    setLightTheme,

    // Variables
    isDarkMode,
  };
};
