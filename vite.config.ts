import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './src/app'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@editor': resolve(__dirname, './src/editor'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@lib': resolve(__dirname, './src/lib'),
      '@marketplace': resolve(__dirname, './src/marketplace'),
      '@plugins': resolve(__dirname, './src/plugins'),
      '@presets': resolve(__dirname, './src/presets'),
      '@routes': resolve(__dirname, './src/routes'),
      '@store': resolve(__dirname, './src/store'),
      '@styles': resolve(__dirname, './src/styles'),
      '@themes': resolve(__dirname, './src/themes'),
    },
  },

  // Tauri compatibility: no server-side port conflicts
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // Tell Vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },
  },

  // Tauri expects a fixed output dir
  build: {
    outDir: 'dist',
    // Reduce chunk size — desktop doesn't need aggressive code splitting
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          editor: ['@tiptap/react', '@tiptap/starter-kit'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
  },

  // Prevent Vite from obscuring Rust errors
  clearScreen: false,
})
