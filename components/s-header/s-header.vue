<template>
  <header class="s-header">
    <div class="s-header__container l-wide">
      <nuxt-link to="/" class="s-header__logo" aria-label="Перейти на главную">
        <a-icon-logo />
      </nuxt-link>
      <div v-if="!store.isMobile" class="s-header__menu">
        <m-menu :items="menuItems" />
      </div>
      <a class="s-header__phone" href="tel:+79162176557">
        <img
          v-if="showIcons"
          class="s-header__phone-icon"
          src="/images/icons/phone.svg"
          alt="Позвоните нам: +7 916 217 65 57"
        />
        <span class="s-header__phone-number" aria-label="Позвоните нам: +7 916 217 65 57">+7 916 217 65 57</span>
      </a>
      <div class="s-header__actions">
        <a-button
          v-if="showApplication"
          class="s-header__button"
          label="Оставить заявку"
          type="outline"
          @click="showPopup = !showPopup"
        />
        <a-button
          class="s-header__button"
          label="Войти"
          :type="showIcons ? 'icon' : 'primary'"
          :icon-link="showIcons ? '/images/icons/login.svg' : ''"
        />
        <a-button
          v-if="store.isMobile"
          class="s-header__button"
          type="icon"
          :icon-link="showMenu ? ' /images/icons/menu-close.svg' : '/images/icons/menu.svg'"
          @click="showMenu = !showMenu"
        />
      </div>
    </div>

    <a-popup :visible="showPopup" class="s-header__popup" @close="showPopup = false">
      <m-form-popup title="Оставь заявку на обучение" @on-send="showPopup = false" />
    </a-popup>

    <div v-if="showMenu && store.isMobile" class="s-header__menu-popup">
      <m-menu class="s-header__menu-mobile" :items="menuItems" orientation="vertical" />
    </div>
  </header>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';

const store = useDeviceStore();

const menuItems = ref([
  {
    name: 'index',
    anchor: 'Обо мне',
    link: '/',
  },
  {
    name: 'catalog',
    anchor: 'Опыт работы',
    link: '/',
  },
]);

const showPopup = ref(false);
const showMenu = ref(false);
const showApplication = computed(() => store.isTablet || store.isDesktop);
const showIcons = computed(() => store.isMobile);
</script>

<style lang="scss">
@import './s-header.scss';
</style>
