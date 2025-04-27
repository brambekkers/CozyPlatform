<script setup lang="ts">
import Shape1 from '@/components/shapes/shape1.vue'

import Main from '@/components/editor/Main.vue'
import Sidebar from '@/components/editor/Sidebar.vue'
</script>

<template>
  <section id="editor" class="flex flex-col md:flex-row">
    <div class="title">
      <Shape1 class="title-shape" color="#3d76e0" />
      <MainTitle class="title" color="#fffec4" title="Map Maker" />
    </div>

    <Main />
    <Sidebar />
  </section>
</template>

<style scoped>
#editor {
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: sandybrown;

  .title {
    position: absolute;
    z-index: 4;
    top: -2px;
    left: -2px;
    width: 30vw;
    container-type: inline-size;

    .title-shape {
      position: absolute;
      width: 100%;
      z-index: 1;
    }

    .title {
      position: absolute;
      z-index: 2;
      color: #fffec4;
      font-size: 13cqw;
      margin-left: 10cqw;
      margin-top: 2cqw;
      transform: rotate(-3deg);
    }
  }

  main {
    position: relative;
    z-index: 3;
    flex-grow: 1;
  }
}
</style>
