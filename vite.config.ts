import path from 'path'
import { defineConfig } from 'vite'
import Vue2 from '@vitejs/plugin-vue2'
import Vue3 from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import compiler from 'vue2/compiler-sfc'

const src = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    Vue3({
      include: [/vue3[/\\].*\.vue$/],
    }),
    Vue2({
      include: [/vue2[/\\].*\.vue$/],
      compiler: compiler as any,
    }),
    Inspect(),
  ],
})
