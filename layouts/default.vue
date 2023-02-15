<template>
  <div class="s-layout">
    <NuxtLoadingIndicator color="#ff0a47" />
    <s-header />
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

onMounted(() => {
  handleResize();

  if (process.client) {
    window.addEventListener('resize', handleResize);
  }
});
</script>
