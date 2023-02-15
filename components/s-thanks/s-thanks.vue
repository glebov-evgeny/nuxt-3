<template>
  <section class="s-thanks">
    <div class="s-thanks__container">
      <h1 class="s-thanks__title">Спасибо <span class="s-thanks__title-break">за заявку!</span></h1>
      <p class="s-thanks__description">
        В ближайшее время наш менеджер <span class="s-thanks__description-break">свяжется с вами</span>
      </p>
      <a-button
        label="Вернуться на главную"
        type="tertiary"
        class="s-thanks__button"
        size="large"
        :block="store.isMobile"
        @click="handleClick"
      />
    </div>
  </section>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';

const router = useRouter();
const store = useDeviceStore();

const handleClick = () => {
  router.push('/');
};
</script>

<style lang="scss">
@import './s-thanks.scss';
</style>
