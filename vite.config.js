import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',                 // source folder
  base: './',                  // relative paths for dev & GitHub Pages
  server: {
    port: 3000,                // dev server port
  },
  build: {
    outDir: '../dist',         // output folder
    emptyOutDir: true,
  },
});
