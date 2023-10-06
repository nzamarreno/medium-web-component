import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react()],
  // Insert this one line to your vite.config.ts
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "subscription",
      fileName: (format) => `subscription.${format}.js`,
    },
    target: "es2015",
  },
});
