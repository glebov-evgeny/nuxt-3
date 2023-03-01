<template>
  <main class="s-main">
    <div class="column l-wide">
      <s-intro />
      <s-photo />
      <s-swiper />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.column {
  display: grid;
  grid-template-areas: 'intro' 'photo' 'swiper';
  gap: 1rem;
  padding-top: 2.5rem;
  @media screen and (min-width: 768px) {
    grid-template-areas: 'intro photo' 'swiper swiper';
  }
  @media screen and (min-width: 1140px) {
    // grid-template-columns: repeat(3, 1fr);
  }
}
</style>
