import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: process.env.NODE_ENV === 'production' ? '/peoplesBlog/' : '/',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        addForm: resolve(__dirname, 'src/addForm.html'),
        reviews: resolve(__dirname, 'src/reviews.html'),
      }
    }
  }
});
