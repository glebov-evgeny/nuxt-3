import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import ru from '../locales/ru.json';

// eslint-disable-next-line no-undef
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ru',
    messages: {
      en,
      ru,
    },
  });

  vueApp.use(i18n);
});