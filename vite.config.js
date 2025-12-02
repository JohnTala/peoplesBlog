import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/peoplesBlog/',  // <-- GitHub Pages subpath
  server: { port: 3000 },
  build: {
    outDir: '../dist',      // Output folder outside src
    emptyOutDir: true,
  },
});
