import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@/styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@/hooks", replacement: path.resolve(__dirname, "src/hooks") },
      {
        find: "@/screens",
        replacement: path.resolve(__dirname, "src/screens"),
      },
    ],
  },
  plugins: [react()],
});
