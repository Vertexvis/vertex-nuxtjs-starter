<script setup lang="ts">
import SceneTree from '../components/scene-tree/scene-tree.vue';
import Viewer from '../components/viewer/viewer.vue';
</script>

<template>
  <div class="container">
    <SceneTree class="tree" />
    <Viewer />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;
}

.tree {
  border-right: 1px solid #cccccc;
}
</style>
