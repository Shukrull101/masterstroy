import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // "@/shared/..." вместо длинных "../../../shared/..."
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
