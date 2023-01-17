<template>
  <div class="m-form">
    <div v-if="title" class="m-form__title">{{ title }}</div>
    <div class="m-form__inputs">
      <slot name="inputs" />
      <a-button :label="buttonText" :disabled="submitDisabled" block size="large" />
    </div>
    <div class="m-form__checkbox">
      <a-control v-model="personalData">
        Я даю согласие на обработку персональных данных, согласен на получение информационных рассылок от Университета
        «Синергия» и соглашаюсь c политикой конфиденциальности
      </a-control>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'Отправить',
  },
  submitDisabled: {
    type: Boolean,
    default: true,
  },
});

const personalData = ref(false);
</script>

<style lang="scss">
@import './m-form.scss';
</style>
