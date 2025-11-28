import { defineConfig } from 'vite';

const isGitHubPages = process.env.DEPLOY === 'true';

export default defineConfig({
  root: 'src',
  base: isGitHubPages ? '/my-peoplesblog/' : './',  // Relative for local dev, absolute for GH Pages
  server: { port: 3000 },
  preview: { port: 3000 },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
