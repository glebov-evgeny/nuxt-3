<template>
  <div
    class="m-direction-card"
    :class="classes"
    @touchstart="handleHover"
    @mouseenter="handleHover"
    @touchend="handleLeave"
    @mouseleave="handleLeave"
  >
    <div class="m-direction-card__container">
      <h3 class="m-direction-card__title">{{ direction.attributes.name }}</h3>
      <p class="m-direction-card__description">{{ direction.attributes.description }}</p>
    </div>
    <a-button
      label="Выбрать профессию"
      :size="store.isDesktop ? 'medium' : 'small'"
      type="outline"
      class="m-direction-card__button"
      @click="goToSlug(direction.attributes.slug)"
    />
    <span
      v-sane-html="isHovered ? direction.attributes.svg_hover_icon : direction.attributes.svg_icon"
      class="m-direction-card__icon"
    />
    <span
      v-sane-html="isHovered ? direction.attributes.svg_hover_layer : direction.attributes.svg_layer"
      class="m-direction-card__layer"
    />
    <!--eslint-enable-->
  </div>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';

const router = useRouter();
const store = useDeviceStore();

const props = defineProps({
  direction: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 1,
  },
});

const isHovered = ref(false);

const handleHover = () => {
  isHovered.value = true;
};

const handleLeave = () => {
  isHovered.value = false;
};

const goToSlug = (slug) => {
  router.push(`/catalog/${slug}`);
};

const size = computed(() => {
  switch (props.index) {
    case 0:
    case 6:
      return 'big';
    case 3:
      return 'long';
    default:
      return 'medium';
  }
});

const classes = computed(() => ({
  [`m-direction-card--${size.value}`]: true,
  ['m-direction-card--hovered']: isHovered.value,
}));
</script>

<style lang="scss">
@import './m-direction-card.scss';
</style>
