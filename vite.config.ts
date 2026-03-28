import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { docsApiPlugin } from './docsApiPlugin'

export default defineConfig({
  plugins: [react(), docsApiPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
})
