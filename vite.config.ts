import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "./src",
      "@components": "./src/Components",
      "@pages": "./src/Pages",
      "@composables": "./src/Composables",
      "@data": "./src/Data",
      "@interfaces": "./src/Interfaces",
    },
  },
});
