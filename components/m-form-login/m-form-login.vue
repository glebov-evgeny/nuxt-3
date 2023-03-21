<template>
  <m-form :title="$t('form.login')" :button-text="$t('form.login')" :submit-disabled="!validFlag" @on-submit="sendForm">
    <template #inputs>
      <a-input id="popup-form-email" v-model="fieldsData.email" :placeholder="$t('form.email')" />
      <a-input
        id="popup-form-password"
        v-model="fieldsData.password"
        type="password"
        :placeholder="$t('form.password')"
      />
    </template>
  </m-form>
</template>

<script setup>
let fieldsData = reactive({
  email: '',
  password: '',
});

let errors = reactive({
  email: true,
  password: true,
});

let validFlag = ref(false);

const checkedValidateError = () => {
  errors.name = /^([A-Z][-,a-z,0-9']+[ ]*)+$/i.test(fieldsData.name);
  errors.password = /^([A-Z][-,a-z,0-9']+[ ]*)+$/i.test(fieldsData.password);
  return errors.name && errors.password;
};

watch(
  fieldsData,
  () => {
    validFlag.value = checkedValidateError();
  },
  { immediate: true },
);

const sendForm = () => {
  if (validFlag) {
    console.log('форма отправлена');
  }
};
</script>
