export default defineNuxtConfig({
  compatibilityDate: '2026-04-27',
  srcDir: 'src/',
  css: ['~/css/main.css'],
  plugins: [{ src: '~/plugins/vertex-viewer.ts', mode: 'client' }],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('vertex-'),
    },
  },
  $development: {
    devtools: { enabled: true },
  },
});
