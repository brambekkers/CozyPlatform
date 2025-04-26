<script setup lang="ts">
import Game from './components/Game.vue'
import Editor from './components/Editor.vue'
import MainMenu from '@/components/menus/MainMenu.vue'

const { gameModus } = storeToRefs(useLayoutStore())
</script>

<template>
  <Transition name="fade" mode="out-in">
    <Game v-if="gameModus === 'game'" />
    <Editor v-else-if="gameModus === 'editor'" />
  </Transition>
  <MainMenu />
</template>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
