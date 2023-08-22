export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/css/main.css'],
  plugins: [{ src: '~/plugins/vertex-viewer.ts', mode: 'client' }],
  builder: 'webpack',
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('vertex-'),
    },
  },
  $development: {
    devtools: { enabled: true },
  }
});
