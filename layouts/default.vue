<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-loader />
    <s-header @handler-change-themes="changeColorThemes" />
    <NuxtPage />
    <s-footer />
  </div>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';

const store = useDeviceStore();

const handleResize = () => {
  store.updateWidth(window.innerWidth);
};

const isLightThemes = ref(false);
const changeColorThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};
onMounted(() => {
  handleResize();

  if (process.client) {
    window.addEventListener('resize', handleResize);
  }
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
