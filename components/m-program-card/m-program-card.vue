<template>
  <div
    class="m-program-card"
    :class="classes"
    @touchstart="handleHover"
    @mouseenter="handleHover"
    @touchend="handleLeave"
    @mouseleave="handleLeave"
  >
    <div class="m-program-card__title">{{ program.attributes.name }}</div>
    <div class="m-program-card__description">{{ program.attributes.description }}</div>
    <div class="m-program-card__actions">
      <a-button
        label="Записаться"
        type="outline-grey"
        :size="store.isDesktop ? 'large' : 'small'"
        class="m-program-card__button"
        @click="emit('click')"
      />
      <nuxt-link class="m-program-card__link" :to="`/catalog/${program.attributes.slug}`">Подробнее</nuxt-link>
    </div>
    <div
      class="m-program-card__image"
      :style="`background-image: url('${
        isHovered ? program.attributes.preview_image_hover_url : program.attributes.preview_image_url
      }')`"
    />
  </div>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';

const store = useDeviceStore();

defineProps({
  program: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['click']);

const isHovered = ref(false);

const handleHover = () => {
  isHovered.value = true;
};

const handleLeave = () => {
  isHovered.value = false;
};

const classes = computed(() => ({
  ['m-program-card--hovered']: isHovered.value,
}));
</script>

<style lang="scss">
@import './m-program-card.scss';
</style>
