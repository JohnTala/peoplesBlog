import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',                 // source folder
  base: '/my-peoplesblog/',    // replace with your repo name for GitHub Pages
  server: {
    port: 3000,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
