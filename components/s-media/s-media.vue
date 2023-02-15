<template>
  <section class="s-media s-padding s-margin s-border">
    <div class="s-media__container l-wide">
      <div class="s-media__title s-title">О нас в СМИ</div>
      <div class="s-media__container-types">
        <div class="s-media__button">
          <swiper class="s-media__button-types" v-bind="swiperConfigTypes">
            <swiper-slide
              v-for="(mediaType, index) in filterItems"
              :key="index"
              :data-type="mediaType.value"
              :class="[activeTab === mediaType.value ? 'active-tab' : 's-media__types-item']"
              @click="remapActiveTabs(mediaType)"
            >
              {{ mediaType.title }}
            </swiper-slide>
          </swiper>
          <div class="s-media__button-navigation">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <div class="s-media__container-media">
        <Swiper class="s-media__swiper" v-bind="swiperConfigMedia">
          <template v-for="(post, i) in posts" :key="i">
            <SwiperSlide
              v-if="activeTab === 'all' || activeTab === post.attributes.theme"
              class="s-media__swiper-slide"
            >
              <div class="s-media__item">
                <div class="s-media__slide--img">
                  <nuxt-img
                    preset="cover"
                    loading="lazy"
                    placeholder
                    :src="post.attributes.preview_image_url"
                    :alt="post.attributes.title"
                  />
                </div>
                <div class="s-media__item-text">
                  <div class="s-media__item-title">
                    {{ post.attributes.title }}
                  </div>
                  <div class="s-media__item-description">
                    {{ post.attributes.description }}
                  </div>
                  <div class="s-media__item-link">
                    <a :href="post.attributes.link || '#'" class="s-media__link-more">Читать далее</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </template>
        </Swiper>
        <div class="swiper-pagination s-media__swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Pagination, Navigation } from 'swiper';
import getPosts from '~~/api/getPosts';

import 'swiper/scss/pagination';
import './s-media.scss';
let activeTab = ref('all');
const posts = await getPosts();

const filterItems = [
  {
    title: 'Все статьи',
    value: 'all',
  },
  {
    title: 'Карьера',
    value: 'Карьера',
  },
  {
    title: 'Маркетинг',
    value: 'Маркетинг',
  },
  {
    title: 'IT',
    value: 'IT',
  },
];
//   mediaItems = [
//   {
//     title: 'Гостеприимство',
//     prefix: `Сняты VR-экскурсии в гостинице Бородино и в Якитории.
//           В ближайшее время будут установлены VR-очки в...`,
//     img: 'hospitality',
//     type: 'career',
//   },
//   {
//     title: 'Информационные технологии',
//     prefix: 'Факультет Информационных технологий впервые в Москве презентовал бионических...',
//     img: 'it',
//     type: 'IT',
//   },
//   {
//     title: 'Киберспорт',
//     prefix: `Первый профильный факультет
//           игровой индустрии и киберспорта  в мире! Представлена профильная практика...`,
//     img: 'cybersport',
//     type: 'market',
//   },
//   {
//     title: 'Гостеприимство',
//     prefix: `Сняты VR-экскурсии в гостинице Бородино и в Якитории.
//           В ближайшее время будут установлены VR-очки в...`,
//     img: 'hospitality',
//     type: 'career',
//   },
// ],
const swiperConfigMedia = reactive({
  slidesPerView: 1.3,
  observer: true,
  observeParents: true,
  spaceBetween: 16,
  grabCursor: false,
  centeredSlides: false,
  slidesPerGroup: 1,
  autoResize: false,
  breakpoints: {
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2.5,
    },
    1140: {
      spaceBetween: 20,
      slidesPerView: 3.2,
    },
  },
  modules: [Pagination, Navigation],
  pagination: {
    el: '.s-media__swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

const swiperConfigTypes = reactive({
  slidesPerView: 'auto',
  spaceBetween: 0,
  resistance: true,
  resistanceRatio: 0,
});

const remapActiveTabs = (el) => (activeTab.value = el.value);
</script>
