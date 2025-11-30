import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: process.env.NODE_ENV === 'production' ? '/my-peoplesblog/' : '/',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
