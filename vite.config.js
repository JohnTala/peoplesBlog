import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: process.env.NODE_ENV === 'production' ? '/peoplesBlog/' : '/',
  server: { port: 3000 },
  build: { outDir: '../dist', emptyOutDir: true },
});
