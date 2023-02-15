<template>
  <section class="s-professions s-padding s-border s-margin">
    <div class="s-professions__title s-title">Топ-5 профессий</div>
    <div class="s-professions__container">
      <a-accordion class="s-professions__list">
        <a-accordion-item v-for="(item, index) in professions" :key="index" :item="item">
          <template #preview="slotProps">
            <nuxt-img preset="cover" loading="lazy" placeholder :src="slotProps.preview" />
          </template>
          <template #title="{ isHovered }">
            <div class="s-professions__header" :class="{ 's-professions__header--hovered': isHovered }">
              <div class="s-professions__header-icon">
                <nuxt-img
                  preset="cover"
                  loading="lazy"
                  placeholder
                  :src="isHovered ? item.svg_hover : item.svg_normal"
                />
              </div>
              <div class="s-professions__header-name">(0{{ index + 1 }}) {{ item.title }}</div>
              <div
                class="s-professions__header-arrow"
                :class="{ 's-professions__header-arrow--hovered': isHovered }"
              ></div>
            </div>
          </template>
          <template #actions="slotProps">
            <div class="s-professions__buttons">
              <a-button
                label="Узнать больше"
                type="outline-secondary"
                size="xlarge"
                block
                class="s-professions__button s-professions__button-left"
                @click="goTo(slotProps.attributes.slug)"
              />
              <a-button
                label="Записаться"
                type="tertiary"
                size="xlarge"
                block
                class="s-professions__button s-professions__button-right"
                @click="openForm(slotProps.attributes)"
              />
            </div>
          </template>
        </a-accordion-item>
      </a-accordion>
    </div>

    <a-popup class="s-professions__popup" :visible="showPopup" @close="showPopup = false">
      <m-form-popup title="Оставь заявку на обучение" />
    </a-popup>
  </section>
</template>

<script setup>
import { useLanderStore } from '~/store/lander';
import getPrograms from '~~/api/getPrograms';

const router = useRouter();
const store = useLanderStore();

const showPopup = ref(false);

const opt = {
  query: {
    'include': ['direction'],
    'filter[status]': 'published',
    // опция в админке пропала
    // 'filter[show_on_main]': true,
  },
};

let professions = await getPrograms(opt);

professions = professions
  .map((v) => ({
    title: v.attributes.name,
    text: v.attributes.description,
    slug: v.attributes.slug,
    preview: v.attributes.detail_image_url,
    svg_normal: v.attributes.svg_normal_image_url,
    svg_hover: v.attributes.svg_hover_image_url,
  }))
  .slice(0, 5);

const goTo = (slug) => {
  router.push(`/program/${slug}`);
};

const openForm = () => {
  showPopup.value = !showPopup.value;
  store.updateLander(attrs);
};
</script>

<style lang="scss">
@import './s-professions.scss';
</style>
