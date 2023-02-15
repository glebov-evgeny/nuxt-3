<template>
  <section class="s-partners s-padding s-border s-margin">
    <div class="s-partners__title s-title"><span>Компании-</span>партнёры</div>
    <div class="s-partners__container">
      <div class="s-partners__list">
        <m-partner-card
          v-for="(partner, index) in filteredPartners"
          :key="index"
          :partner="partner"
          class="s-partners__list-item"
        />
      </div>
    </div>
    <div v-if="store.isMobile && !isAllShown" class="s-partners__actions">
      <a-button :label="moreLabel" size="large" block class="s-partners__button" @click="showMore" />
    </div>
  </section>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';

const store = useDeviceStore();
const props = defineProps({
  partners: {
    type: Array,
    required: true,
  },
});

let moreStep = ref(8);
let moreCount = computed(() => props.partners.length - moreStep.value);
let moreLabel = `Показать еще (${moreCount.value})`;

let isAllShown = computed(() => moreStep.value === props.partners.length);

let filteredPartners = computed(() => (store.isMobile ? props.partners.slice(0, moreStep.value) : props.partners));

const showMore = () => {
  moreStep.value = props.partners.length;
};
</script>

<style lang="scss">
@import './s-partners.scss';
</style>
