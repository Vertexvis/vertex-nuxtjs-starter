<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { toPartialSdkConfig } from '../../lib/client/config';

const sceneTree = ref<HTMLVertexSceneTreeElement | null>(null);

const { data: configResponse } = await useFetch('/api/config');

onMounted(() => {
  if (sceneTree.value != null && configResponse.value != null) {
    sceneTree.value.config = toPartialSdkConfig(configResponse.value);
  }
});
</script>

<template>
  <vertex-scene-tree
    id="scene-tree"
    ref="sceneTree"
    viewer-selector="#vertex-viewer"
  />
</template>

<style scoped>
#scene-tree {
  width: 100%;
  height: 100%;
}
</style>
