/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    publicDir: "../public",
  },
  server: {
    port: 3000,
  },
});
