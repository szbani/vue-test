// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/szabo/WebstormProjects/vue-test/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/szabo/WebstormProjects/vue-test/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vuetify from "file:///C:/Users/szabo/WebstormProjects/vue-test/node_modules/vite-plugin-vuetify/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/szabo/WebstormProjects/vue-test/vite.config.js";
var vite_config_default = defineConfig({
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
        configFile: "src/assets/tasks.scss"
      }
    })
    // VitePluginSass(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      vue: "vue/dist/vue.esm-bundler.js"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzemFib1xcXFxXZWJzdG9ybVByb2plY3RzXFxcXHZ1ZS10ZXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzemFib1xcXFxXZWJzdG9ybVByb2plY3RzXFxcXHZ1ZS10ZXN0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9zemFiby9XZWJzdG9ybVByb2plY3RzL3Z1ZS10ZXN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtmaWxlVVJMVG9QYXRoLCBVUkx9IGZyb20gJ25vZGU6dXJsJ1xyXG5cclxuaW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVldGlmeSBmcm9tICd2aXRlLXBsdWdpbi12dWV0aWZ5J1xyXG4vLyBpbXBvcnQgVml0ZVBsdWdpblNhc3MgZnJvbSAndml0ZS1wbHVnaW4tc2FzcydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdnVlKHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzQ3VzdG9tRWxlbWVudDogdGFnID0+IHRhZy5zdGFydHNXaXRoKCdtZC0nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdnVldGlmeSh7XHJcbiAgICAgICAgICAgIGF1dG9JbXBvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnRmlsZTogJ3NyYy9hc3NldHMvdGFza3Muc2NzcydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBWaXRlUGx1Z2luU2FzcygpLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICAgICAgdnVlOiAndnVlL2Rpc3QvdnVlLmVzbS1idW5kbGVyLmpzJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFRLGVBQWUsV0FBVTtBQUVyVixTQUFRLG9CQUFtQjtBQUMzQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxhQUFhO0FBSjZLLElBQU0sMkNBQTJDO0FBUWxQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNOLGlCQUFpQjtBQUFBO0FBQUEsUUFFakI7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDSixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsUUFDSixZQUFZO0FBQUEsTUFDaEI7QUFBQSxJQUVKLENBQUM7QUFBQTtBQUFBLEVBRUw7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDcEQsS0FBSztBQUFBLElBQ1Q7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
