import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // project source folder
  base: process.env.NODE_ENV === 'production' ? '/peoplesBlog/' : '/',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../dist', // build output folder
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        addForm: resolve(__dirname, 'src/addForm.html'),
        reviews: resolve(__dirname, 'src/reviews.html'),
        singlepost: resolve(__dirname, 'src/singlepost.html'), // lowercase matches file
        display:resolve(__dirname,'src/display.html'),
      },
    },
  },
});
