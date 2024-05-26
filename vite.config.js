import { defineConfig } from 'vite';

export default defineConfig({
  // Boshqa sozlamalar
  optimizeDeps: {
    exclude: ['jest']
  }
});
