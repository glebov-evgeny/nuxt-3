<template>
  <header class="header" :class="[{ invisible: isScrolled }]">
    <div class="container header__container">
      <div class="header__logo">
        <nuxt-link to="/">
          <img src="@/assets/images/header/logo.png" alt="logo" />
        </nuxt-link>
      </div>
      <div class="header__menu">
        <m-menu :items="menuItems" />
      </div>
      <button type="button" @click="clickBurger" v-if="isMobileView" class="header__burger">
        <svg
          class="ham hamRotate hamR"
          :class="[{ active: isActiveBurger }]"
          viewBox="0 0 100 100"
          width="40"
          ref="ham"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path class="line middle" d="m 70,50 h -40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </button>
      <div class="s-header__actions">
        <button @click="changeLanguage($i18n)" class="" type="button">Переключалка</button>
        <button @click="changeThemes" class="header__themes" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_578_178)">
              <path
                class="header__themes--dark"
                d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_578_178">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>

    <a-popup :visible="showPopup" @close="showPopup = false" class="s-header__popup">
      <m-form-popup title="Оставь заявку на обучение" />
    </a-popup>
  </header>
</template>

<script setup>
import './s-header.scss';
import { ref, onMounted } from 'vue';

const emit = defineEmits(['handler-change-themes']);
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  isMobileView: {
    type: Boolean,
    required: true,
  },
});

const isScrolled = ref(false);
const isActiveBurger = ref(false);

const menuItems = ref([
  {
    name: 'index',
    anchor: 'главная',
    link: '/',
  },
  {
    name: 'test',
    anchor: 'Тест',
    link: '/test',
  },
  {
    name: 'test',
    anchor: 'ZZZZZZZ',
    link: '#test',
  },
]);

// eslint-disable-next-line no-unused-vars
const scrollPage = () => {
  let scrollPrev = 0;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 80 && scrolled > scrollPrev) {
      isScrolled.value = true;
    } else {
      isScrolled.value = false;
    }
    scrollPrev = scrolled;
  });
};

// eslint-disable-next-line no-unused-vars
const changeThemes = (event) => {
  emit('handler-change-themes', event);
};

const clickBurger = () => {
  isActiveBurger.value = !isActiveBurger.value;
};

// eslint-disable-next-line no-unused-vars
const changeLanguage = (lang) => {
  // eslint-disable-next-line no-param-reassign
  lang.locale = lang.locale === 'ru' ? 'en' : 'ru';
};

onMounted(() => {
  scrollPage();
});
</script>
