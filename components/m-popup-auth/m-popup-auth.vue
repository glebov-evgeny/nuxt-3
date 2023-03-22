<template>
  <m-form-login v-if="currenForm === 'login'" @form-btn-click="togglePopupForm" />
  <m-form-registration v-if="currenForm === 'registration'" @form-btn-click="togglePopupForm" />
</template>

<script setup>
let currenForm = ref('login');

const togglePopupForm = (formType) => {
  currenForm.value = formType;
};
</script>
