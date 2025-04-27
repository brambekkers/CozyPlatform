<script setup lang="ts">
const activeTab = defineModel<number>({ required: true })
defineProps<{ tabs: { value: number; label: string }[] }>()

const slideDirFrom = ref('translateX(-5cqw)')
const slideDirTo = ref('translateX(5cqw)')

watch(activeTab, (newVal, oldVal) => {
  if (newVal < oldVal) {
    slideDirFrom.value = 'translateX(5cqw)'
    slideDirTo.value = 'translateX(-5cqw)'
  } else {
    slideDirFrom.value = 'translateX(-5cqw)'
    slideDirTo.value = 'translateX(5cqw)'
  }
})
</script>

<template>
  <section class="flex flex-col">
    <div class="tabs">
      <div
        v-for="{ label, value } of tabs"
        :key="value"
        class="tab"
        :class="{ active: activeTab === value }"
        @click="activeTab = value"
      >
        {{ label }}
      </div>
    </div>

    <div class="active-tab overflow-hidden">
      <Transition name="slide" mode="out-in">
        <div :key="activeTab">
          <slot>
            {{ activeTab }}
          </slot>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style lang="css" scoped>
.tabs {
  display: flex;
  gap: 0.5cqw;
  margin-inline: 0.5cqw;

  .tab {
    cursor: pointer;
    background-color: burlywood;
    border-top-left-radius: 0.2cqw;
    border-top-right-radius: 0.2cqw;
    padding: 0.4cqw 0.8cqw;
    font-size: max(0.75cqw, 16px);
    opacity: 0.7;
    transition: all 0.2s ease-in-out;

    &.active {
      opacity: 1;
    }
  }
}

.active-tab {
  background-color: burlywood;
  border-radius: 0.2cqw;
  min-height: 100px;
  padding: 1cqw;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 200ms ease;
}

.slide-enter-from {
  transform: v-bind(slideDirFrom);
  opacity: 0;
}

.slide-leave-to {
  transform: v-bind(slideDirTo);
  opacity: 0;
}
</style>
