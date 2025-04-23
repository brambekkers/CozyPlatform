<script setup lang="ts">
const { color = '#094CF2' } = defineProps<{ color?: string }>()
</script>

<template>
  <svg viewBox="0 0 413 94" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.789307 83.7885V0.558838L304.086 0.560474L123.769 54.1961L124.395 49.031L0.789307 83.7885Z"
      :fill="color"
    />
    <path d="M180.36 41.4566L357.898 0.560474H412.907L180.36 41.4566Z" :fill="color" />
    <path d="M22.7552 87.7823L0.790261 90.1819L0.789307 93.0717L22.7552 87.7823Z" :fill="color" />
  </svg>
</template>
