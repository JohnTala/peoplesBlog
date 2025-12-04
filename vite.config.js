import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/peoplesBlog/',   // production only
  server: { port: 3000 },
  build: { outDir: '../dist', emptyOutDir: true },
});
