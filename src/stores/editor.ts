import newScene from '@/constants/editor/newScene'

export const useEditorStore = defineStore('editor', () => {
  const scene = ref<Scene>({ ...newScene })

  return { scene }
})
