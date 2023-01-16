<template>
  <div :class="['content', { 'dark-themes': isLightThemes }]">
    <SHeader />
    <slot />
    <SFooter />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLightThemes: true,
      };
    },
  }
</script>
