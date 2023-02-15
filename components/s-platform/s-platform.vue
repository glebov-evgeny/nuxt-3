<template>
  <section class="s-platform s-padding">
    <div class="l-wide">
      <div class="s-platform__container">
        <div class="s-platform__container-text">
          <div class="s-platform__text-main">
            <h1 class="s-platform__title s-title-h1">Карьерно-<br />образовательная<br />платформа</h1>
            <div class="s-platform__subtitle">
              Получи актуальную профессию<br />
              сейчас — оплачивай обучение<br />
              после трудоустройства
            </div>
            <a-button class="s-platform__button" label="Выбрать профессию" type="outline" size="large" />
          </div>
          <div class="s-platform__text-swiper">
            <swiper
              class="s-platform__text"
              v-bind="textSwiper"
              :controller="{ control: secondSwiper }"
              @swiper="setFirstSwiper"
            >
              <swiper-slide
                v-for="(slogan, index) in slogans"
                :key="index"
                :class="`s-platform__text-slide${index + 1}`"
              >
                <div class="s-platform__text-item">
                  <div class="s-platform__text-subtitle">Самые актуальные направления:</div>
                  <div class="s-platform__text-prefix">
                    {{ slogan.text }}
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="s-platform__container-picture">
          <swiper
            class="s-platform__picture"
            v-bind="picterSwiper"
            :controller="{ control: firstSwiper }"
            @swiper="setSecondSwiper"
          >
            <swiper-slide v-for="(slogan, index) in slogans" :key="index" class="s-platform__picture-img">
              <picture>
                <source :srcset="`/images/s-platform/${index + 1}.webp`" media="(min-width: 1140px)" />
                <source :srcset="`/images/s-platform/${index + 1}-tablet.webp`" media="(min-width: 768px)" />
                <img :src="`/images/s-platform/${index + 1}-mobile.webp`" :alt="slogan.title" />
              </picture>
            </swiper-slide>
          </swiper>
        </div>
        <div class="s-platform__pagination"></div>
      </div>
      <div class="s-platform__sprite-desktop">
        <svg width="373" height="577" viewBox="0 0 373 577" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.85489 -105.062C25.6323 -109.35 48.5808 -98.4843 59.6981 -78.147L170.99 125.445C182.108 145.782 178.865 170.965 162.959 187.823L3.72255 356.582C-12.184 373.439 -37.1364 378.137 -58.0845 368.219L-267.79 268.926C-288.738 259.007 -300.917 236.727 -297.957 213.74L-268.326 -16.3855C-265.366 -39.3734 -247.941 -57.841 -225.164 -62.1296L2.85489 -105.062Z"
            fill="#FF0A47"
            stroke="white"
          />
          <path
            d="M-11.8849 -109.183C10.8925 -113.471 33.841 -102.605 44.9583 -82.2681L156.251 121.324C167.368 141.661 164.125 166.844 148.219 183.702L-11.0172 352.46C-26.9237 369.318 -51.8762 374.016 -72.8243 364.098L-282.53 264.804C-303.478 254.886 -315.657 232.606 -312.697 209.619L-283.066 -20.5066C-280.106 -43.4945 -262.681 -61.9621 -239.903 -66.2507L-11.8849 -109.183Z"
            fill="#FF0A47"
            stroke="white"
          />
          <path
            d="M-28.8717 -112.342C-6.09429 -116.63 16.8542 -105.765 27.9715 -85.4273L139.264 118.165C150.381 138.502 147.139 163.685 131.232 180.543L-28.004 349.301C-43.9105 366.159 -68.863 370.857 -89.8111 360.938L-299.517 261.645C-320.465 251.727 -332.644 229.447 -329.684 206.459L-300.053 -23.6658C-297.093 -46.6537 -279.668 -65.1212 -256.89 -69.4098L-28.8717 -112.342Z"
            fill="#FF0A47"
            stroke="white"
          />
        </svg>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Pagination, Autoplay, EffectFade, Controller, EffectCreative } from 'swiper';

const slogans = [
  {
    title: 'Интернет-маркетинг с нуля',
    text: `Интернет-маркетинг с нуля — умение анализировать рынок,
    работать с инструментами по привлечению трафика и формировать уникальное торговое предложение.`,
  },
  {
    title: 'Геймдизайнер и разработчик игр',
    text: `Геймдизайнер и разработчик игр — специалист, проектирует игровую систему,
    определяет механику игры, понимает, как игрок будет чувствовать себя в игровом процессе.`,
  },
  {
    title: 'Веб-разработчик',
    text: `Веб-разработчик — это специалист, который разрабатывает техническую часть сайта,
    приложений, в том числе и мобильных. Без него не обходится ни один цифровой продукт.`,
  },
  {
    title: 'Электронная коммерция',
    text: `Электронная коммерция — это стремительно развивающаяся сфера цифровой экономики,
    к которой относится весь бизнес в сети.`,
  },
  {
    title: 'Управление',
    text: `Управление — это изучение основ менеджмента, экономики, стратегического планирования
    и работы с персоналом. Управление проектами любых масштабов.`,
  },
  {
    title: 'Менеджер по продажам',
    text: `Менеджер по продажам — специалист, взаимодействующий с клиентами, розничными и оптовыми
    покупателями, целью которого является успешное закрытие сделки.`,
  },
  {
    title: 'Дизайн',
    text: `Дизайн — это направление, которое включает самые разные виды дизайна:
    от ландшафтного до выставочного,  от предметного до интерьерного  и графического.`,
  },
];

const textSwiper = reactive({
  spaceBetween: 16,
  effect: 'fade',
  modules: [Pagination, Autoplay, EffectFade, Controller],
  allowTouchMove: true,
  pagination: {
    el: '.s-platform__pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1140: {
      allowTouchMove: false,
    },
  },
});

const picterSwiper = reactive({
  effect: 'creative',
  allowTouchMove: false,
  modules: [Autoplay, EffectCreative, Controller],
  speed: 5500,
  creativeEffect: {
    delay: 40000,
    prev: {
      shadow: false,
      translate: [0, -180, 0],
      rotate: [0, 0, 0],
    },
    next: {
      shadow: false,
      translate: [0, 80, 0],
      rotate: [0, 0, 0],
    },
  },
});

const firstSwiper = ref(null);
const secondSwiper = ref(null);
const setFirstSwiper = (swiper) => {
  firstSwiper.value = swiper;
};
const setSecondSwiper = (swiper) => {
  secondSwiper.value = swiper;
};
</script>

<style lang="scss">
@import './s-platform.scss';
@import 'swiper/scss/pagination';
@import 'swiper/scss/effect-fade';
@import 'swiper/scss/thumbs';
</style>
