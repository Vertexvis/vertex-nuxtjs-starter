import { VertexViewerPlugin } from '@vertexvis/viewer-vue';

export default defineNuxtPlugin((app) => {
  app.vueApp.use(VertexViewerPlugin);
});
