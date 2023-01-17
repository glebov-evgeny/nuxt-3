<template>
  <footer class="s-footer">
    <div class="s-footer__container l-wide">
      <div class="s-footer__top">
        <div class="s-footer__logo">
          <nuxt-link to="/">...</nuxt-link>
        </div>
        <m-menu :items="menuItems" type="footer" class="s-footer__menu" />
        <div class="s-footer__info"></div>
      </div>
      <div class="s-footer__bottom">
        <a href="#" class="s-footer__policy" @click="showPolicy = true">Линк1</a>
        <a href="#" class="s-footer__policy" @click="showAgreement = true">Линк2</a>
      </div>
    </div>

    <a-popup :visible="showPolicy" @close="showPolicy = false" width="800px" class="s-footer__popup">
      <h2>Заголовок1</h2>
    </a-popup>

    <a-popup :visible="showAgreement" @close="showAgreement = false" width="800px" class="s-footer__popup">
      <h2>Заголовок2</h2>
    </a-popup>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import './s-footer.scss';

const menuItems = ref([
  {
    name: 'index',
    anchor: '..',
    link: '/',
  },
]);

const showPolicy = ref(false);
const showAgreement = ref(false);
</script>
