/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true, // enable Jest-like global test APIs
    setupFiles: "./src/setupTests.ts", // optional, if you need global test setup
    coverage: {
      include: ["src/components/**/*.{ts,tsx}"],
      exclude: [
        "src/components/**/*.types.{ts,tsx}",
        "src/components/**/*.stories.{ts,tsx}",
        "src/components/**/*.constants.{ts,tsx}",
        "src/components/**/*.test.{ts,tsx}",
        "src/components/**/*.spec.{ts,tsx}",
      ],
      reporter: ["text", "json", "html"],
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 80,
        lines: 80, 
      },
      all: true,
    },
  },
});
