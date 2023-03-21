<template>
  <m-form-login v-if="currenForm === 'login'" @on-send="onSend" />
  <m-form-registration v-else @on-send="onSend" />
</template>

<script setup>
let currenForm = ref('registration');
</script>
