import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 80,
    proxy: {
      "/v1": "http://localhost:3000"
    }
  },

  server: {
    port: 3002,
    proxy: {
      "/v1": "http://localhost:3000"
    }
  },

});
