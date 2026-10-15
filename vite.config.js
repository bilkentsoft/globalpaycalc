import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts') || id.includes('d3') || id.includes('react-resize-detector')) {
              return 'vendor-charts';
            }
            if (id.includes('@supabase') || id.includes('postgrest') || id.includes('websocket')) {
              return 'vendor-supabase';
            }
            return 'vendor-core';
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
