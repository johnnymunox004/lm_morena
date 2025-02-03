import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu'],
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: '/',
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu']
  },
  assetsInclude: ['**/*.mp3', '**/*.wav', '**/*.jpg', '**/*.png', '**/*.jpeg'],
})
