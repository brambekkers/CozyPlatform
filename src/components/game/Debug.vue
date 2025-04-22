<script setup lang="ts">
const { showBlockingLayer, showInteractionLayer } = storeToRefs(useDebugStore())
</script>

<template>
  <div id="debug">
    <h3>Show layers</h3>
    <div class="option">
      Blocking Layer:
      <input type="checkbox" v-model="showBlockingLayer" />
    </div>
    <div class="option">
      Interaction Layer:
      <input type="checkbox" v-model="showInteractionLayer" />
    </div>
  </div>
</template>

<style scoped>
#debug {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  padding: 0.6rem;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
}
</style>
