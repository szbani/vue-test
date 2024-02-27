import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
// import VitePluginSass from 'vite-plugin-sass'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // isCustomElement: tag => tag.startsWith('md-')
                }
            }
        }),
        vuetify({
            autoImport: true,
            styles: {
                configFile: 'src/assets/tasks.scss'
            }

        }),
        // VitePluginSass(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    }
})
