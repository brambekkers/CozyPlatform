<script setup lang="ts">
const { interaction } = defineProps<{
  interaction: Interaction
}>()

const boxStyle = computed(() => ({
  top: `${interaction.y}px`,
  left: `${interaction.x}px`,
  width: `${interaction.w}px`,
  height: `${interaction.h}px`,
}))
</script>

<template>
  <div class="interaction" :style="boxStyle" />
</template>

<style scoped>
.interaction {
  position: absolute;
  background-color: purple;

  opacity: 0.4;
}
</style>
