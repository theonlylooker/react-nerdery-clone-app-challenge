import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
("vite-plugin-svgr");

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/react-nerdery-clone-app-challenge",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup.ts",
    include: ["**/*.test.tsx"],
  },
  plugins: [react(), svgr({ svgrOptions: {} })],
});
