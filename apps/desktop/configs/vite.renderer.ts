import { join } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  root: join(__dirname, "../src/renderer"),
  plugins: [react()],
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "../../dist/renderer",
  },
  resolve: {
    alias: {
      src: join(__dirname, "../src"),
    },
  },
  server: {
    host: "localhost",
    port: 3344,
  },
});
