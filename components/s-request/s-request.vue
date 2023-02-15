<template>
  <section class="s-request s-padding s-border s-margin">
    <div class="s-request__title s-title">Оставь заявку на обучение</div>
    <div class="s-request__container">
      <m-form
        :submit-disabled="!validFlag"
        :form-options="formOptions"
        :button-options="buttonOptions"
        :direction="store.isDesktop ? 'horizontal' : 'vertical'"
        button-text="Подать заявку"
        @on-submit="sendForm"
      >
        <template #inputs>
          <a-input
            id="popup-form-name"
            v-model="fieldsData.name"
            class="s-request__input"
            placeholder="Имя"
            size="large"
          />
          <a-input
            id="popup-form-phone"
            v-model="fieldsData.phone"
            class="s-request__input"
            placeholder="Телефон"
            size="large"
          />
          <a-input
            id="popup-form-email"
            v-model="fieldsData.email"
            class="s-request__input"
            placeholder="Почта"
            size="large"
          />
        </template>
      </m-form>
    </div>
  </section>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';
const { $lander } = useNuxtApp();
const route = useRoute();
const store = useDeviceStore();

const handleResize = () => {
  buttonOptions.width = store.isDesktop ? '25%' : '100%';
};

onMounted(() => {
  handleResize();
  if (process.client) {
    window.addEventListener('resize', handleResize);
  }
});

const buttonOptions = reactive({
  type: 'secondary',
  block: false,
  size: 'large',
  width: '25%',
});

const formOptions = {
  type: 'contrast',
};

let fieldsData = reactive({
  name: '',
  email: '',
  phone: '',
});

let errors = reactive({
  name: true,
  email: true,
  phone: true,
});

let validFlag = ref(true);
let validPhone = ref(false);

const checkedValidateError = () => {
  errors.name = /^([A-ZА-ЯЁ][-,a-z, a-яё. ']+[ ]*)+$/i.test(fieldsData.name);
  errors.email = $lander.valid([{ value: fieldsData.email, type: 'email' }]);
  errors.phone = validPhone && fieldsData.phone !== '';
  return errors.name && errors.email && errors.phone;
};

watch(fieldsData, () => {
  validFlag.value = checkedValidateError();
});

const sendForm = () => {
  checkedValidateError();

  if (validFlag.value) {
    $lander
      .send(
        fieldsData,
        {},
        route.name === 'edu-platform-slug' || route.name === 'edu-platform' ? route.path : undefined,
      )
      .then(() => {
        emit('onSend');
      });
  }
};
</script>

<style lang="scss">
@import './s-request.scss';
</style>
