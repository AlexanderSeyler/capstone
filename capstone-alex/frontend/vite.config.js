// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",

  server: {
    port: 5000, // Port number for the development server.
    open: true, // Whether to open the browser automatically when starting the development server.
  },

  build: {
    outDir: "dist", // Output directory for the production build.
    assetsDir: "assets", // Directory for static assets.
    manifest: true, // Whether to generate manifest.json.
    sourcemap: false, // Whether to generate source maps.
  },

  // Plugins configuration.
  plugins: [],

  // CSS configuration.
  css: {
    modules: false, // Enable CSS modules.
    postcss: {}, // PostCSS options.
  },
});
