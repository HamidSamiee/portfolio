import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['portfolio-kjwg.onrender.com']
  },
  server: {
    host: true,
    port: 3000,
  }
})
