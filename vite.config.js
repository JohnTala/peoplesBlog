import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/peoplesBlog/', // <-- Important for GitHub Pages
  server: { port: 3000 },
  build: { outDir: '../dist', emptyOutDir: true },
});
