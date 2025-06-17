import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: false, // Важно, иначе Vite будет искать public/index.html
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
