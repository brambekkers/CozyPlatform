<script setup lang="ts">
import Layers from '@/components/game/Layers.vue'
const { scene } = storeToRefs(useEditorStore())

const sceneStyle = computed(() => ({
  width: `${scene.value.w}px`,
  height: `${scene.value.h}px`,
}))
</script>

<template>
  <main>
    <div id="map" :style="sceneStyle">
      <Suspense :key="scene.id">
        <Layers :scene />
        <template #fallback>Loading...</template>
      </Suspense>
      <Player />
    </div>
  </main>
</template>

<style scoped>
main {
  position: relative;
  z-index: 3;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  #map {
    position: relative;
    background-color: red;
  }
}
</style>
