<template>
  <nav class="m-menu" :class="classes">
    <ul class="m-menu__list">
      <li v-for="(item, index) in items" :key="index" class="m-menu__item">
        <NuxtLink :class="{ active: $route.name === item.name }" class="m-menu__link" :to="item.link">
          {{ item.anchor }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  orientation: {
    type: String,
    validator(value) {
      return ['horizontal', 'vertical'].indexOf(value) !== -1;
    },
    default: 'horizontal',
  },
  type: {
    type: String,
    validator(value) {
      return ['header', 'footer'].indexOf(value) !== -1;
    },
    default: 'header',
  },
});

const classes = computed(() => ({
  [`m-menu--${props.type}`]: true,
  [`m-menu--${props.orientation}`]: true,
}));
</script>

<style lang="scss">
@import './m-menu.scss';
</style>
