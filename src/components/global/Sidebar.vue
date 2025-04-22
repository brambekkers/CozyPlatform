<script setup lang="ts">
import Button from '@/components/global/Button.vue'

const isOpen = defineModel<boolean>({ required: true })
const { title = 'Sidebar', width = '400px' } = defineProps<{ title: string; width?: string }>()
</script>

<template>
  <div class="backdrop" :class="{ hidden: !isOpen }">
    <section class="sidebar" :class="{ visible: isOpen }">
      <Button color="danger" class="close" @click="isOpen = false">X</Button>
      <header>{{ title }}</header>
      <main>
        <slot />
      </main>
      <footer />
    </section>
  </div>
</template>

<style scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  transition: all 0.5s;
  transition-delay: 100ms;

  &.hidden {
    background-color: rgba(0, 0, 0, 0) !important;
    pointer-events: none;
  }

  .sidebar {
    transition: all 1s
      linear(
        0,
        0.564 8.3%,
        0.99 17%,
        1.152 21.5%,
        1.281 26.1%,
        1.378 30.9%,
        1.445 35.9%,
        1.475 40%,
        1.487 44.2%,
        1.48 48.7%,
        1.455 53.4%,
        1.369 62.5%,
        1.073 86.5%,
        1.018 93.6%,
        1
      );
    translate: 120% 0;
    position: absolute;
    top: 0;
    height: 100%;
    right: 0;
    width: v-bind(width);
    display: flex;
    flex-direction: column;
    color: white;
    box-shadow: -2px 0px 0px 0px rgba(0, 0, 0, 0.4);

    &.visible {
      translate: 0 0;
    }
    .close {
      position: absolute;
      top: 10px;
      left: -12px;
      height: 50px;
      width: 70px;
    }

    header {
      background-color: #248ef6;
      border-bottom: #055cb3 solid 6px;
      padding-top: 3px;
      padding-left: 35px;
      text-shadow:
        black 0px 4px 0px,
        black 2px 0px 0px,
        black -2px 0px 0px,
        black 0px -2px 0px;
      min-height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
    }

    main {
      background-color: #105de5;
      font-size: 20px;
      flex-grow: 1;
      overflow: auto;
      min-height: 400px;
      min-width: 400px;
      border-top: #063a97 solid 3px;
      border-bottom: #063a97 solid 3px;
      padding: 16px;
      display: flex;
      flex-direction: column;
    }

    footer {
      background-color: #248ef6;
      min-height: 10px;
    }
  }
}
</style>
