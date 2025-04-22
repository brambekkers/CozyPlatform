<script setup lang="ts">
import Button from '@/components/global/Button.vue'

const isOpen = defineModel<boolean>({ required: true })
const { title, width = '50vw' } = defineProps<{ title: string; width?: string }>()
</script>

<template>
  <div class="backdrop" :class="{ hidden: !isOpen }">
    <section class="modal" :class="{ visible: isOpen }">
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

  &.hidden {
    background-color: rgba(0, 0, 0, 0) !important;
    pointer-events: none;
  }

  .modal {
    position: relative;
    color: white;
    scale: 0;
    opacity: 0;
    transition: all 500ms
      linear(
        0,
        0.002 0.5%,
        0.007 1.1%,
        0.015 1.6%,
        0.028 2.2%,
        0.044 2.8%,
        0.063 3.4%,
        0.088 4.1%,
        0.116 4.8%,
        0.17 6%,
        0.234 7.3%,
        0.501 12.3%,
        0.622 14.7%,
        0.678 15.9%,
        0.73 17.1%,
        0.778 18.3%,
        0.819 19.4%,
        0.86 20.6%,
        0.896 21.8%,
        0.928 23%,
        0.956 24.2%,
        0.98 25.4%,
        1.003 26.7%,
        1.021 28%,
        1.036 29.3%,
        1.05 31%,
        1.06 32.9%,
        1.066 34.9%,
        1.067 37.1%,
        1.064 39.2%,
        1.058 41.7%,
        1.027 50.7%,
        1.015 54.9%,
        1.006 58.9%,
        1 63.1%,
        0.997 67.7%,
        0.996 73.1%,
        1
      );
    box-shadow:
      2px 0px 0px 0px rgba(0, 0, 0, 0.4),
      -2px 0px 0px 0px rgba(0, 0, 0, 0.4),
      0px 2px 0px 0px rgba(0, 0, 0, 0.4),
      0px -2px 0px 0px rgba(0, 0, 0, 0.4);

    &.visible {
      scale: 1;
      opacity: 1;
    }

    .close {
      position: absolute;
      top: 10px;
      right: -12px;
      height: 50px;
      width: 70px;
    }

    header {
      border-radius: 4px 4px 0px 0px;
      background-color: #248ef6;
      border-bottom: #055cb3 solid 6px;
      padding-top: 3px;
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
      width: v-bind(width);
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
      border-radius: 0px 0px 4px 4px;
    }
  }
}
</style>
