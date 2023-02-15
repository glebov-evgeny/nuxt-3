<template>
  <div class="m-directions-filter" :class="classes">
    <div
      class="m-directions-filter__item"
      :class="{ 'm-directions-filter__item--active': selected === 'all' }"
      @click="selectItem('all')"
    >
      <div class="m-directions-filter__item-text">Все направления&nbsp;</div>
      <div class="m-directions-filter__item-count">{{ count }}</div>
    </div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="m-directions-filter__item"
      :class="[
        { 'm-directions-filter__item--active': item.attributes.slug === selected },
        { 'm-directions-filter__item--next': isNext === index },
      ]"
      @click="selectItem(item)"
    >
      <div class="m-directions-filter__item-text">{{ item.attributes.name }}&nbsp;</div>
      <div class="m-directions-filter__item-count">{{ item.relationships.publishedPrograms.data.length }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  count: {
    type: [Number, String],
    required: false,
    default: 0,
  },
  mobile: {
    type: Boolean,
    required: false,
    default: false,
  },
  selected: {
    type: String,
    required: false,
    default: 'all',
  },
});

const emit = defineEmits(['on-select']);

let selectedItem = ref('');

watch(
  () => props.selected,
  () => {
    const { selected } = props;
    selectedItem.value = selected;
  },
);

const selectItem = (item) => {
  selectedItem.value = item.attributes?.slug || item;
  emit('on-select', selectedItem.value);
};

const isNext = computed(() => {
  return props.items.findIndex((item) => item.attributes.slug === props.selected) + 1;
});

const classes = computed(() => ({
  [`m-directions-filter--mobile`]: props.mobile,
}));
</script>

<style lang="scss">
@import './m-directions-filter.scss';
</style>
