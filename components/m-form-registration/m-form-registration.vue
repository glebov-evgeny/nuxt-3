<template>
  <m-form
    :title="$t('form.registration')"
    :button-text="$t('form.registration')"
    :submit-disabled="!validFlag"
    @on-submit="registerUser"
  >
    <template #inputs>
      <a-input id="popup-form-email" v-model="fieldsData.email" :placeholder="$t('form.email')" />
      <a-input id="popup-form-password" v-model="fieldsData.password" :placeholder="$t('form.password')" />
    </template>
  </m-form>
</template>

<script setup>
import { createUserWithEmailAndPassword } from 'firebase/auth';
const emit = defineEmits(['onSend']);
const nuxtApp = useNuxtApp();
const router = useRouter();

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
  errors.email = /^([A-Z][-,a-z,0-9']+[ ]*)+$/i.test(fieldsData.name);
  errors.password = /^([A-Z][-,a-z,0-9']+[ ]*)+$/i.test(fieldsData.password);
  return errors.email;
};
watch(
  fieldsData,
  () => {
    validFlag.value = checkedValidateError();
  },
  { immediate: true },
);

async function registerUser() {
  if (validFlag) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { user } = await createUserWithEmailAndPassword(nuxtApp.$auth, fieldsData.email, fieldsData.password);
      console.log('correct');
      emit('onSend');
      router.push({ path: '/skills' });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }
}

// const sendForm = () => {
//   if (validFlag) {
//     console.log('форма отправлена');
//   }
// };
</script>
