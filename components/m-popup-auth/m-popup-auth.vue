<template>
  <m-form-login v-if="currenForm === 'login'" @on-send="onSend" @form-btn-click="togglePopupForm" />
  <m-form-registration v-if="currenForm === 'registration'" @on-send="onSend" @form-btn-click="togglePopupForm" />
</template>

<script setup>
const emit = defineEmits(['onSend']);

let currenForm = ref('login');

const togglePopupForm = (formType) => {
  currenForm.value = formType;
};

const onSend = () => {
  emit('onSend');
};
</script>
