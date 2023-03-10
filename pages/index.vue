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
  grid-template-columns: 1fr;
  grid-template-areas: 'intro' 'photo' 'swiper';
  gap: 1rem;
  padding-top: 2.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'intro photo' 'swiper swiper';
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 'intro intro intro photo photo' 'swiper swiper swiper swiper swiper';
  }
}
</style>
