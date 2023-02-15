<template>
  <section class="s-directions s-padding s-border s-margin">
    <div class="s-directions__title s-title">Направления обучения</div>
    <div class="s-directions__container">
      <div class="s-directions__list">
        <m-direction-card
          v-for="(direction, index) in filteredDirections"
          :key="index"
          class="s-directions__item"
          :direction="direction"
          :index="index"
        />
      </div>
    </div>
    <div v-if="!store.isDesktop && !isAllShown" class="s-directions__actions">
      <a-button :label="moreLabel" size="large" block class="s-directions__button" @click="showMore" />
    </div>
  </section>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';
import getDirections from '~~/api/getDirections';

const store = useDeviceStore();
const directions = await getDirections();

let moreStep = ref(4);
let moreCount = computed(() => directions.length - 4);
let moreLabel = `Показать еще (${moreCount.value})`;

let isAllShown = computed(() => moreStep.value === directions.length);

let filteredDirections = computed(() => (store.isDesktop ? directions : directions.slice(0, moreStep.value)));

const showMore = () => {
  moreStep.value = directions.length;
};
</script>

<style lang="scss">
@import './s-directions.scss';
</style>
