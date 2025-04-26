<script setup lang="ts">
import Debug from '@/components/game/Debug.vue'
import Layers from '@/components/game/Layers.vue'
import Player from '@/components/game/Player.vue'

const playerStore = usePlayerStore()
const { currentScene } = storeToRefs(useSceneStore())
const sceneStyle = computed(() => ({
  width: `${currentScene.value.w}px`,
  height: `${currentScene.value.h}px`,
}))

import { usePlayerStore } from '@/stores/player'

const lastTimestamp = ref(0)
const animationFrameId = ref<number | null>(null)

const gameLoop = (timestamp: number) => {
  if (!lastTimestamp.value) lastTimestamp.value = timestamp
  // Calculate deltaTime in seconds
  const deltaTime = (timestamp - lastTimestamp.value) / 1000
  // Update game state
  playerStore.updatePosition(deltaTime)
  // Store current timestamp for next frame
  lastTimestamp.value = timestamp
  // Continue the loop
  animationFrameId.value = requestAnimationFrame(gameLoop)
}

onMounted(() => (animationFrameId.value = requestAnimationFrame(gameLoop)))
onUnmounted(() => {
  if (animationFrameId.value) cancelAnimationFrame(animationFrameId.value)
})
</script>

<template>
  <section id="game">
    <Debug />
    <div id="scene" :style="sceneStyle">
      <Suspense :key="currentScene.id">
        <Layers :scene="currentScene" />
        <template #fallback>Loading...</template>
      </Suspense>
      <Player />
    </div>
  </section>
</template>

<style lang="css" scoped>
#game {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;

  #scene {
    scale: 4;
    position: relative;
  }
}
</style>
