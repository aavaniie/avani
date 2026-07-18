import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// standard vite setup, nothing fancy here
export default defineConfig({
  plugins: [react()],
})
