/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    publicDir: "../public",
  },
  server: {
    port: 3000,
  },
});
