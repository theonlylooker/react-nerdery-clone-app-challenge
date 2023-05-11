import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
("vite-plugin-svgr");

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup.ts",
    include: ["**/*.test.tsx"],
  },
  plugins: [react(), svgr({ svgrOptions: {} })],
});
