import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/my-peoplesblog/',   // required for GitHub Pages deployment
  server: {
    port: 3000,               // dev server port
  },
  build: {
    outDir: '../dist',        // build output folder
    emptyOutDir: true,
  },
});
