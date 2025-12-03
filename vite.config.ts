import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Masquer tous les warnings en mode production
        if (process.env.NODE_ENV === 'production' || process.env.CI === 'false') {
          return;
        }
        warn(warning);
      }
    },
    // Réduire la verbosité
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000
  },
  esbuild: {
    // Masquer les warnings ESBuild
    logOverride: {
      'this-is-undefined-in-esm': 'silent',
      'commonjs-variable-in-esm': 'silent'
    }
  },
  logLevel: process.env.CI === 'false' ? 'error' : 'info'
})
