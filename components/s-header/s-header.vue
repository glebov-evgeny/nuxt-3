<template>
  <header class="s-header">
    <div class="s-header__container l-wide">
      <div class="s-header__logo">
        <nuxt-link to="/">
          <img src="@/assets/images/header/test.png" alt="logo1" />
        </nuxt-link>
      </div>
      <div class="s-header__menu" v-if="!isMobile">
        <m-menu :items="menuItems" />
      </div>
      <div class="s-header__actions">
        <button @click="changeLanguage($i18n)" class="" type="button">Переключалка</button>
      </div>
    </div>

    <a-popup :visible="showPopup" @close="showPopup = false" class="s-header__popup">
      <m-form-popup title="Оставь заявку на обучение" />
    </a-popup>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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

const windowWidth = ref(0);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const changeLanguage = (lang) => {
  // eslint-disable-next-line no-param-reassign
  lang.locale = lang.locale === 'ru' ? 'en' : 'ru';
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});
</script>

<style lang="scss">
@import './s-header.scss';
</style>
