import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // default, bisa diganti kalau mau
    proxy: {
      "/api": "http://localhost:5000", // arahkan API ke backend Express
    },
  },
})
