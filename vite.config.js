import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/peoplesBlog/',   // ✅ Matches your GitHub repo name
  server: { port: 3000 },
  build: { outDir: '../dist', emptyOutDir: true },
});
