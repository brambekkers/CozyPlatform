<script setup lang="ts">
const { title = 'Title' } = defineProps<{ title?: string }>()
</script>

<template>
  <h2>
    <span v-for="letter of title" :key="letter">
      <span class="shadow">{{ letter }}</span>
      <span class="title">{{ letter }}</span>
    </span>
  </h2>
</template>

<style>
h2 {
  .shadow {
    position: absolute;
    color: #000;
    transform: scaleX(1.1) scaleY(1.2);
    translate: 0.03em 0.04em;
  }
  .title {
    position: relative;
    color: inherit;
    text-shadow:
      black 0px 0.02em 0px,
      black 0.02em 0px 0px,
      black -0.02em 0px 0px,
      black 0px -0.02em 0px;
  }
}
</style>
