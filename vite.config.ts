import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Ensure esbuild is properly configured
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: '/',
  assetsInclude: ['**/*.mp3', '**/*.wav', '**/*.jpg', '**/*.png', '**/*.jpeg']
})
