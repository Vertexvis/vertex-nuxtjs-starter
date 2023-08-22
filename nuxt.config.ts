export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/css/main.css'],
  plugins: [{ src: '~/plugins/vertex-viewer.ts', mode: 'client' }],
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('vertex-'),
        },
      },
    },
    optimizeDeps: {
      exclude: ['@vertexvis/viewer-vue'],
    },
  },
  $development: {
    devtools: { enabled: true },
  },
});
