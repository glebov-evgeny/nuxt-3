<template>
  <section class="s-swiper">
    <div class="s-swiper__container">
      <div class="s-swiper__block">
        <h2 class="s-swiper__title s-title">{{ $t('swiper.title') }}</h2>
        <swiper class="s-swiper__slider" v-bind="swiperConfig">
          <swiper-slide v-for="(item, index) in presentations" :key="index">
            <img :src="`/images/swiper/${item.label}.png`" class="s-swiper__item" />
          </swiper-slide>
        </swiper>
        <div class="s-swiper__pagination"></div>
        <div class="s-swiper__navigation">
          <div ref="sliderPrev" class="s-swiper__navigation-prev"></div>
          <div ref="sliderNext" class="s-swiper__navigation-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Pagination, Navigation } from 'swiper';

const presentations = [{ label: 'start' }, { label: 'care' }, { label: 'start' }, { label: 'care' }];
const sliderPrev = ref(null);
const sliderNext = ref(null);
// const baseURL = process.NUXT_APP_BASE_URL;

const swiperConfig = reactive({
  slidesPerView: 1,
  spaceBetween: 25,
  grabCursor: true,
  loop: true,
  navigation: {
    prevEl: sliderPrev,
    nextEl: sliderNext,
  },
  breakpoints: {
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2.5,
    },
    // 768: {
    //   slidesPerGroup: 2,
    //   slidesPerView: 2.5,
    // },
    // 1140: {
    //   spaceBetween: 20,
    //   slidesPerView: 2.3,
    // },
  },
  modules: [Pagination, Navigation],
  pagination: {
    el: '.s-swiper__pagination',
    clickable: true,
  },
});
</script>

<style lang="scss">
@import './s-swiper.scss';
</style>
