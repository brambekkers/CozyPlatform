<script setup lang="ts">
import Modal from '@/components/global/Modal.vue'
import Button from '@/components/global/Button.vue'

const { gameModus } = storeToRefs(useLayoutStore())
const menuOpen = ref(false)

const startGame = () => {
  gameModus.value = 'game'
  menuOpen.value = false
}

const openMapEditor = () => {
  gameModus.value = 'editor'
  menuOpen.value = false
}

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menuOpen.value = true
  })
})
</script>

<template>
  <div>
    <Modal v-model="menuOpen" title="Main Menu" width="500px">
      <div class="menu-container">
        <Button color="success" style="width: 100%" @click="startGame"> Start Game </Button>
        <Button color="contrast" style="width: 100%" @click="openMapEditor"> Map Editor </Button>
        <Button color="contrast" style="width: 100%"> Credits </Button>
        <Button color="contrast" style="width: 100%"> Quit game </Button>
      </div>
    </Modal>
  </div>
</template>

<style lang="css">
.menu-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 15px 40px;
}
</style>
