export const useDebugStore = defineStore('debug', () => {
  const showBlockingLayer = ref(false)
  const showInteractionLayer = ref(true)

  return { showBlockingLayer, showInteractionLayer }
})
