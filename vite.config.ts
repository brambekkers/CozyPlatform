import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'

const autoImportOptions = {
  dts: './src/auto-imports.d.ts',
  imports: ['vue', 'pinia'],
  dirs: ['src/stores', 'src/composables', 'src/utils', 'src/types'],
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), AutoImport(autoImportOptions)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
