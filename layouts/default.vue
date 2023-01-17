<template>
  <div class="s-layout">
    <s-header />
    <main class="s-main">
      <slot />
    </main>
    <s-footer />
  </div>
</template>

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
