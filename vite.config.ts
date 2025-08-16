import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['src'],
        silenceDeprecations: ['legacy-js-api', 'import'],
        additionalData: `@use "styles/index.scss" as *;`, // injected into every .scss
      },
    },
  },
  server: { open: true },
})
