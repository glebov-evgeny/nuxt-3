<template>
  <section class="s-reviews s-padding s-margin s-border">
    <div class="s-reviews__title s-title">Отзывы <span class="s-reviews__title-tail">о программах обучения</span></div>
    <div class="s-reviews__container">
      <swiper class="s-reviews__slider" v-bind="swiperConfig">
        <swiper-slide v-for="(review, index) in reviews" :key="index">
          <m-review-card :review="review" class="s-reviews__item" />
        </swiper-slide>
      </swiper>
      <div class="s-reviews-swiper-pagination"></div>
      <div class="s-reviews-swiper-navigation">
        <div ref="sliderPrev" class="swiper-button-prev"></div>
        <div ref="sliderNext" class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Pagination, Navigation } from 'swiper';
import getReviews from '~~/api/getReviews';

const reviews = await getReviews();

const sliderPrev = ref(null);
const sliderNext = ref(null);

const swiperConfig = reactive({
  slidesPerView: 1.2,
  spaceBetween: 16,
  grabCursor: true,
  navigation: {
    prevEl: sliderPrev,
    nextEl: sliderNext,
  },
  breakpoints: {
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2.5,
    },
    1140: {
      spaceBetween: 20,
      slidesPerView: 2.3,
    },
  },
  modules: [Pagination, Navigation],
  pagination: {
    el: '.s-reviews-swiper-pagination',
    clickable: true,
  },
});
</script>

<style lang="scss">
@import './s-reviews.scss';
</style>
