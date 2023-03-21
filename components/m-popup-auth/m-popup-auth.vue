<template>
  <m-form-login v-if="currenForm === 'reg'" />
  <m-form-registration v-else />
</template>

<script setup>
let currenForm = ref('reg');
</script>
