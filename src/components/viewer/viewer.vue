<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { toPartialSdkConfig } from '../../lib/client/config';
import { handleTap } from '../../lib/client/viewer/handlers';
import { viewerRef } from '../../lib/client/viewer/refs';

const viewer = ref<HTMLVertexViewerElement | null>(null);

const { data: configResponse } = await useFetch('/api/network-config');
const { data: streamKeyResponse } = await useFetch('/api/stream-key');

onMounted(async () => {
  if (viewer.value != null && configResponse.value != null) {
    viewer.value.config = toPartialSdkConfig(configResponse.value);

    viewerRef.value = viewer.value;
  }
});
</script>

<template>
  <vertex-viewer
    id="vertex-viewer"
    :src="streamKeyResponse?.streamKey"
    ref="viewer"
    @tap="handleTap"
  >
    <vertex-viewer-default-toolbar></vertex-viewer-default-toolbar>
    <vertex-viewer-toolbar placement="top-right">
      <vertex-viewer-view-cube class="view-cube"></vertex-viewer-view-cube>
    </vertex-viewer-toolbar>
  </vertex-viewer>
</template>

<style scoped>
#vertex-viewer {
  display: flex;
  height: 100%;
  width: 100%;
}

.view-cube {
  top: 1.5rem;
  right: 1.5rem;
}
</style>
