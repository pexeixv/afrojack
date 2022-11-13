/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "..",
  },
  server: {
    port: 3000,
  },
});
