<script setup lang="ts">
const playerStore = usePlayerStore()

const { position, direction, walkAnimation, idleAnimation } = storeToRefs(playerStore)

const playerStyle = computed(() => ({
  left: `${position.value.x}px`,
  top: `${position.value.y}px`,
  backgroundImage: `url(${playerImages.value[`${direction.value}_${direction.value.includes('idle') ? idleAnimation.value : walkAnimation.value}`]})`,
  transform: direction.value.includes('left') ? 'scaleX(-1)' : '',
}))

const playerImages = ref({})

const keysPressed = ref({
  up: false,
  down: false,
  left: false,
  right: false,
})

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowUp' || e.key === 'w') keysPressed.value.up = true
  if (e.key === 'ArrowDown' || e.key === 's') keysPressed.value.down = true
  if (e.key === 'ArrowLeft' || e.key === 'a') keysPressed.value.left = true
  if (e.key === 'ArrowRight' || e.key === 'd') keysPressed.value.right = true

  // Determine primary direction for animation
  if (keysPressed.value.up) playerStore.move('up')
  if (keysPressed.value.down) playerStore.move('down')
  if (keysPressed.value.left) playerStore.move('left')
  if (keysPressed.value.right) playerStore.move('right')
}

const handleKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'ArrowUp' || e.key === 'w') keysPressed.value.up = false
  if (e.key === 'ArrowDown' || e.key === 's') keysPressed.value.down = false
  if (e.key === 'ArrowLeft' || e.key === 'a') keysPressed.value.left = false
  if (e.key === 'ArrowRight' || e.key === 'd') keysPressed.value.right = false

  // Stop movement in released direction
  if (!keysPressed.value.up && !keysPressed.value.down) {
    playerStore.velocity.y = 0
  }
  if (!keysPressed.value.left && !keysPressed.value.right) {
    playerStore.velocity.x = 0
  }

  // Update animation state if no keys are pressed
  if (!Object.values(keysPressed.value).some(Boolean)) {
    if (playerStore.direction.includes('idle')) return
    playerStore.direction = `idle_${playerStore.direction}`
  }
}

onMounted(async () => {
  playerImages.value = await loadPlayerSprites()
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
})
</script>

<template>
  <div id="player" :style="playerStyle" />
</template>

<style>
#player {
  position: absolute;
  width: 16px;
  height: 16px;
  /* background-color: red; */
  translate: -50% -50%;
  background-position: center;
  background-size: 24px;

  /* TEMP */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
}
</style>
