import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: './',        // relative base for local dev and GitHub Pages
  server: {
    port: 3000
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
