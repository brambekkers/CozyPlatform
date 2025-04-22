import { defineStore, storeToRefs } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const { currentScene } = storeToRefs(useSceneStore())

  // Speed in pixels per second (rather than pixels per keypress)
  const walkSpeed = ref(40) // e.g., 60 pixels per second

  // Add velocity
  const velocity = ref({ x: 0, y: 0 })
  const maxVelocity = ref(60) // max pixels per second
  const direction = ref('idle_down')
  const idleAnimation = ref(0)
  const walkAnimation = ref(0)
  const isIdle = computed(
    () => Math.abs(velocity.value.x) < 0.1 || Math.abs(velocity.value.y) < 0.1,
  )
  const animationTimer = ref(0)

  const position = ref({
    x: 50,
    y: 50,
  })

  const lastValidPos = ref({ ...position.value })

  const tilePos = computed(() => ({
    x: Math.floor(position.value.x / 16),
    y: Math.floor(position.value.y / 16),
  }))

  const canWalk = computed(() => !currentScene.value.block[tilePos.value.y][tilePos.value.x])

  const currentInteraction = computed(() => {
    return currentScene.value.interactions.find((interaction) => {
      return (
        position.value.x >= interaction.x &&
        position.value.x < interaction.x + interaction.w &&
        position.value.y >= interaction.y &&
        position.value.y < interaction.y + interaction.h
      )
    })
  })

  const handleInteraction = () => {
    if (!currentInteraction.value) return
    const { type, scene } = currentInteraction.value

    if (type === 'scene') {
      useSceneStore().setCurrentScene(scene, currentInteraction.value)
    }
  }
  const updateAnimation = (deltaTime: number) => {
    // Add to the animation timer
    animationTimer.value += deltaTime

    // Check if player is moving or idle based on velocity
    const isMoving = Math.abs(velocity.value.x) > 0.1 || Math.abs(velocity.value.y) > 0.1

    // Handle direction changes
    if (isMoving) {
      // Set appropriate direction based on velocity
      if (Math.abs(velocity.value.y) > Math.abs(velocity.value.x)) {
        // Moving more vertically than horizontally
        direction.value = velocity.value.y < 0 ? 'up' : 'down'
      } else {
        // Moving more horizontally than vertically
        direction.value = velocity.value.x < 0 ? 'left' : 'right'
      }

      // Update walk animation every 0.1 seconds
      if (animationTimer.value >= 0.1) {
        walkAnimation.value = (walkAnimation.value + 1) % 6
        animationTimer.value = 0
      }
    } else {
      // Switch to idle if we just stopped moving
      if (!isIdle.value) {
        direction.value = `idle_${direction.value.replace('idle_', '')}`
        animationTimer.value = 0
      }

      // Update idle animation every 0.2 seconds
      if (animationTimer.value >= 0.2) {
        idleAnimation.value = (idleAnimation.value + 1) % 4
        animationTimer.value = 0
      }
    }
  }

  // Position update function called from game loop
  const updatePosition = (deltaTime: number) => {
    // deltaTime is in seconds (e.g., 0.016 for 60fps)
    // Update position based on velocity and deltaTime
    position.value.x += velocity.value.x * deltaTime
    position.value.y += velocity.value.y * deltaTime

    // Check collisions
    if (!canWalk.value) {
      position.value = { ...lastValidPos.value }
    } else {
      lastValidPos.value = { ...position.value }
    }

    // Handle interactions
    if (!!currentInteraction.value) handleInteraction()

    // Slow down if no input (friction)
    velocity.value.x *= 0.9
    velocity.value.y *= 0.9

    // Stop completely below threshold
    if (Math.abs(velocity.value.x) < 0.1) velocity.value.x = 0
    if (Math.abs(velocity.value.y) < 0.1) velocity.value.y = 0

    updateAnimation(deltaTime)
  }

  const move = (dir: 'up' | 'down' | 'left' | 'right') => {
    direction.value = dir

    if (dir === 'up') velocity.value.y = -walkSpeed.value
    if (dir === 'down') velocity.value.y = walkSpeed.value
    if (dir === 'left') velocity.value.x = -walkSpeed.value
    if (dir === 'right') velocity.value.x = walkSpeed.value

    // Limit max velocity
    velocity.value.x = Math.max(-maxVelocity.value, Math.min(velocity.value.x, maxVelocity.value))
    velocity.value.y = Math.max(-maxVelocity.value, Math.min(velocity.value.y, maxVelocity.value))
  }

  return { position, direction, walkAnimation, idleAnimation, velocity, move, updatePosition }
})
