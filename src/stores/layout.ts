import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const gameModus = ref<'game' | 'editor' | 'settings' | 'credits'>('game')

  return { gameModus }
})
