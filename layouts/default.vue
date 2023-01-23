<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-header @handler-change-themes="changeThemes" :isMobileView="isMobileView" />
    <main class="main">
      <slot />
    </main>
    <s-footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLightThemes = ref(false);
const windowWidth = ref(0);
const isMobileView = ref(false);
const mobileBreakpoint = ref(768);

const changeThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  isMobileView.value = !(windowWidth.value > mobileBreakpoint.value);
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  window.addEventListener('DOMContentLoaded', handleResize);
});
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
