import homeScene from '@/constants/scenes/home'
import secondScene from '@/constants/scenes/second'

export const useSceneStore = defineStore('scene', () => {
  const scenes = {
    home: homeScene,
    second: secondScene,
  }

  const currentScene = ref<Scene>({ ...homeScene })

  const setCurrentScene = (sceneName: SceneName, interaction?: Interaction) => {
    const { position } = storeToRefs(usePlayerStore())
    const scene = scenes[sceneName]
    currentScene.value = { ...scene }

    if (interaction) {
      position.value.x = interaction.newPosition.x
      position.value.y = interaction.newPosition.y
    } else {
      position.value.x = scene.startPosition.x
      position.value.y = scene.startPosition.y
    }
  }

  setTimeout(() => setCurrentScene('home'))

  return { currentScene, setCurrentScene }
})
