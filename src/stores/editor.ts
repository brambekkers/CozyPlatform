import newScene from '@/constants/editor/newScene'

export const useEditorStore = defineStore('editor', () => {
  const scene = ref<EditorScene>({ ...newScene })
  const selectedTile = ref<Tile | null>(null)

  return { scene, selectedTile }
})
