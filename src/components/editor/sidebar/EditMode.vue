<script setup lang="ts">
const editMode = defineModel<string>()
</script>

<template>
  <div class="flex justify-center gap-2">
    <IconButton
      color="contrast"
      @click="editMode = 'Tiles'"
      :class="{ 'opacity-85': editMode !== 'Tiles' }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 36 36"
        fill="#000000"
      >
        <path
          fill="#000"
          d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"
          class="clr-i-solid clr-i-solid-path-1"
        />
        <path
          fill="#59c135"
          d="M32 17H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"
          class="clr-i-solid clr-i-solid-path-2"
        />
        <path
          fill="#bb7547"
          d="M15 30H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"
          class="clr-i-solid clr-i-solid-path-3"
        />
        <path
          fill="#3d76e0"
          d="M32 30H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"
          class="clr-i-solid clr-i-solid-path-4"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </IconButton>
    <IconButton
      color="contrast"
      @click="editMode = 'Block'"
      :class="{ 'opacity-85': editMode !== 'Block' }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 1216 1312">
        <path
          fill="#ed4430"
          d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68"
        />
      </svg>
    </IconButton>
    <IconButton
      color="contrast"
      @click="editMode = 'Interaction'"
      :class="{
        'opacity-85 ': editMode !== 'Interaction',
      }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32">
        <path
          fill="#3f4663"
          d="M13 30a6.007 6.007 0 0 1-6-6h2a4 4 0 0 0 8 0h2a6.007 6.007 0 0 1-6 6"
        />
        <path
          fill="#e8ccfa"
          d="M21 2h-4.44a4 4 0 0 0-2.708 1.057l-9.2 8.466a2.002 2.002 0 0 0 .118 3.055a2.074 2.074 0 0 0 2.658-.173L11 11.143V24a2 2 0 0 0 4 0v-7a2 2 0 0 0 4 0v-1a2 2 0 0 0 4 0v-1a2 2 0 0 0 4 0V8a6 6 0 0 0-6-6"
        />
      </svg>
    </IconButton>
  </div>
</template>

<style lang="scss" scoped></style>
