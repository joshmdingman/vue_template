import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#imports': path.resolve(__dirname, './.nuxt/imports.d.ts'),
      '#components': path.resolve(__dirname, './.nuxt/components.d.ts'),
    },
  },
  test: {
    testMatch: ['**/*.spec.ts'],
    environment: 'happy-dom'
  }
})
