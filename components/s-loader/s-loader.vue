<template>
  <div v-if="loading" class="preloader">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script setup>
const loading = ref(true);
const start = () => {
  const htmlWrapper = document.querySelector('html');
  htmlWrapper.style.overflowY = 'hidden';
  loading.value = true;
};
const finish = () => {
  const htmlWrapper = document.querySelector('html');
  htmlWrapper.style.overflowY = 'visible';
  loading.value = false;
};

onMounted(() => {
  start();
  setTimeout(() => finish(), 1000);
});
</script>

<style lang="scss">
@import './s-loader.scss';
</style>
