<template>
  <div class="m-form">
    <div v-if="title" class="m-form__title">{{ title }}</div>
    <div class="m-form__inputs" :class="classes">
      <slot name="inputs" />
      <a-button
        class="m-form__button"
        :label="buttonText"
        :disabled="isSubmitDisabled"
        :width="buttonOptions.width"
        :block="buttonOptions.block"
        :type="buttonOptions.type"
        :size="buttonOptions.size"
        @click="submitForm"
      />
    </div>
    <div class="m-form__checkbox">
      <a-control v-model="personalData" :text-type="formOptions.type">
        Я даю согласие на обработку персональных данных, согласен на получение информационных рассылок от Университета
        «Синергия» и соглашаюсь c политикой конфиденциальности
      </a-control>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['onSubmit']);
const props = defineProps({
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
  direction: {
    type: String,
    default: 'vertical',
  },
  formOptions: {
    type: Object,
    required: false,
    default() {
      return {
        type: 'primary',
      };
    },
  },
  buttonOptions: {
    type: Object,
    required: false,
    default() {
      return {
        type: 'primary',
        block: true,
        size: 'large',
      };
    },
  },
});

const personalData = ref(true);

const submitForm = () => {
  emit('onSubmit');
};

const isSubmitDisabled = computed(() => !personalData.value || props.submitDisabled);

const classes = computed(() => ({
  [`m-form__inputs--${props.direction}`]: true,
}));
</script>

<style lang="scss">
@import './m-form.scss';
</style>
