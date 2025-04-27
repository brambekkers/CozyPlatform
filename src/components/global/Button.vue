<script setup lang="ts">
const { color = 'primary', size = 'normal' } = defineProps<{
  color?: 'warning' | 'danger' | 'success' | 'primary' | 'contrast'
  size?: 'small' | 'normal' | 'large'
}>()

const buttonColor = computed(() => {
  if (color === 'danger')
    return 'linear-gradient(0deg, #cd0034 0% 10%, #e6311f 10% 90%, #ff7b7b 90% 100%)'
  else if (color === 'warning')
    return 'linear-gradient(0deg, #a6552d 0% 10%, #efc609 10% 90%, #fbef44 90% 100%)'
  else if (color === 'success')
    return 'linear-gradient(0deg, #009f00 0% 10%, #02db07 10% 90%, #00ff00 90% 100%)'
  else if (color === 'contrast')
    return 'linear-gradient(0deg, #272c3d 0% 10%, #333b52 10% 90%, #5e5576 90% 100%)'
  else return 'linear-gradient(0deg, #094af1 0% 10%, #2373ff 10% 90%, #1499ff 90% 100%)'
})

const fontSize = computed(() => {
  if (size === 'small') return '16px'
  else if (size === 'normal') return '24px'
  else return '32px'
})
</script>

<template>
  <button>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<style scoped>
button {
  border-radius: 5px;
  padding: 15px 35px;
  background: v-bind(buttonColor);
  transform: skew(-7deg);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 4px 0px 0px;
  border: 2px solid rgba(0, 0, 0, 1);
  filter: grayscale(0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s
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

  .content {
    color: white;
    font-size: v-bind(fontSize);
    text-shadow:
      black 0px 3px 0px,
      black 1px 0px 0px,
      black -1px 0px 0px,
      black 0px -1px 0px;

    padding-bottom: 2px;
  }

  &:hover {
    scale: 1.02;

    filter: brightness(1) grayscale(0);
    box-shadow: rgba(0, 0, 0, 0.5) 2px 7px 0px 0px;
  }
}
</style>
