<template>
  <section class="s-catalog s-padding s-margin s-border">
    <div class="s-catalog__title s-title">Выбери <span>профессию</span></div>
    <div v-if="store.isDesktop" class="s-catalog__filter">
      <m-directions-filter
        class="s-catalog__filter-block"
        :items="directions"
        :count="programs.length"
        :selected="selectedDirection"
        @on-select="selectDirection"
      />
    </div>
    <div v-else class="s-catalog__manage">
      <div class="s-catalog__manage-left">
        <div class="s-catalog__manage-control s-catalog__manage-directions" @click="showPopupDirections = true">
          {{ selectDirectionName || 'Все направления' }}
        </div>
      </div>
      <div class="s-catalog__manage-right">
        <div class="s-catalog__manage-control s-catalog__manage-search" @click="showPopupSearch = true">&nbsp;</div>
      </div>
    </div>
    <div class="s-catalog__caption">
      <div class="s-catalog__caption-part">
        <h3 class="s-catalog__header">
          Все направления
          <sup class="s-catalog__header-sup">{{ programsCountText }}</sup>
        </h3>
      </div>
      <div v-if="store.isDesktop" class="s-catalog__caption-part s-catalog__caption-part--right">
        <a-input v-model="search" type="search" size="large" class="s-catalog__search" placeholder="Поиск" />
      </div>
    </div>
    <div class="s-catalog__list">
      <template v-for="(program, index) in filteredPrograms" :key="index">
        <m-program-card :program="program" class="s-catalog__list-item" @click="showPopup = true" />
      </template>
    </div>
    <div
      v-if="programs.length > programsCount && filteredPrograms.length === programsCount && !showAll"
      class="s-catalog__actions"
    >
      <a-button
        :label="showMoreLabel"
        :size="store.isDesktop ? 'large' : 'small'"
        class="s-catalog__button"
        @click="showAll = !showAll"
      />
    </div>

    <a-popup :visible="showPopup" class="s-catalog__popup" @close="showPopup = false">
      <m-form-popup title="Оставь заявку на обучение" @on-send="showPopup = false" />
    </a-popup>

    <a-popup
      :visible="showPopupSearch"
      class="s-catalog__popup s-catalog__popup-search"
      fullscreen
      @close="showPopupSearch = false"
    >
      <div class="s-catalog__popup-title">Поиск</div>
      <a-input v-model="search" type="search" size="large" class="s-catalog__popup-search" placeholder="Поиск" />
    </a-popup>

    <a-popup
      :visible="showPopupDirections"
      class="s-catalog__popup s-catalog__popup-directions"
      fullscreen
      @close="showPopupDirections = false"
    >
      <div class="s-catalog__popup-title">
        Выбери<br />
        направление
      </div>
      <m-directions-filter
        :items="directions"
        :count="programs.length"
        :selected="selectedDirection"
        mobile
        @on-select="selectDirection"
      />
    </a-popup>
  </section>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';
import getDirections from '~~/api/getDirections';
import getPrograms from '~~/api/getPrograms';

const store = useDeviceStore();

const optDirections = {
  query: {
    include: ['publishedPrograms'],
  },
};

const directions = await getDirections(optDirections);

const optPrograms = {
  query: {
    'include': ['direction'],
    'filter[status]': 'published',
  },
};

const programs = await getPrograms(optPrograms);

const showPopup = ref(false);
const showPopupSearch = ref(false);
const showPopupDirections = ref(false);
const showAll = ref(false);

let selectedDirection = ref('all');

const selectDirection = (direction) => {
  selectedDirection.value = direction;
  showPopupDirections.value = false;
};

const selectDirectionName = computed(() => {
  return directions.find((direction) => direction.attributes.slug === selectedDirection.value)?.attributes?.name;
});

let search = ref('');
const programsCount = 10;
const programsCountText = computed(() => {
  return `${programs.length} професси${getNoun(programs.length, 'и', 'я', 'й')}`;
});

const showMoreLabel = computed(() => `Показать еще (${programs.length - programsCount})`);

const filteredPrograms = computed(() => {
  let result = [];

  if (selectedDirection.value !== 'all') {
    result = showAll.value
      ? programs.filter((item) => item.relationships.direction.data.attributes.slug === selectedDirection.value)
      : programs
          .filter((item) => item.relationships.direction.data.attributes.slug === selectedDirection.value)
          .slice(0, programsCount);
  } else {
    result = showAll.value ? programs : programs.slice(0, programsCount);
  }

  if (search.value && search.value.length > 2)
    return result.filter(
      (item) =>
        item.attributes.name.toLowerCase().includes(search.value.toLowerCase()) ||
        item.attributes.description.toLowerCase().includes(search.value.toLowerCase()),
    );

  return result;
});
</script>

<style lang="scss">
@import './s-catalog.scss';
</style>
