import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    dts({ tsconfigPath: "./tsconfig.app.json"})
  ],
  build: {
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'knapsack',
      formats: ['es'],
    },
  },
})
