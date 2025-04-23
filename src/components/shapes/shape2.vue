<script setup lang="ts">
const { color = '#094CF2' } = defineProps<{ color?: string }>()
</script>

<template>
  <svg
    version="1.1"
    preserveAspectRatio="none"
    viewBox="0 0 391 394"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M56.4904 30.3111L60.8066 0.466064L390.789 0.466367V393.558H2.36409L7.24523 363.989L0.885742 366.066L50.514 27.1015L56.4904 30.3111Z"
      :fill="color"
    />
  </svg>
</template>
