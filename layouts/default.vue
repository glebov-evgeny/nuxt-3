<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-header @handler-change-themes="changeThemes" />
    <main class="s-main">
      <slot />
    </main>
    <s-footer />
    <a-cursor />
  </div>
</template>

<script setup>
import { ref } from 'vue';
// eslint-disable-next-line import/extensions
// import ACursor from '@/components/a-cursor/a-cursour.vue'

const isLightThemes = ref(false);
const changeThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
