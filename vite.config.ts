import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Presentacion_2025/',
  server: {
    port: 3000, // Set your desired port here
  },
  build: {
    outDir: 'dist'
  }
})
