<template>
  <m-form :title="title" class="m-form-popup">
    <template #inputs>
      <a-input class="m-form-popup__input" id="popup-form-name" placeholder="Имя" v-model="fieldsData.name" />
      <a-input class="m-form-popup__input" id="popup-form-phone" placeholder="Телефон" v-model="fieldsData.phone" />
      <a-input class="m-form-popup__input" id="popup-form-email" placeholder="Почта" v-model="fieldsData.email" />
    </template>
  </m-form>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
});

const fieldsData = ref({
  name: '',
  phone: '',
  email: '',
});
</script>

<style lang="scss">
@import '@/assets/styles/tools/mixins';

.m-form-popup {
  &__input {
    margin-bottom: rem(16);

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

<style lang="scss">
@import './m-form-popup.scss';
</style>
