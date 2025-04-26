export const useLayoutStore = defineStore('layout', () => {
  const gameModus = ref<'game' | 'editor' | 'settings' | 'credits'>('editor')

  return { gameModus }
})
