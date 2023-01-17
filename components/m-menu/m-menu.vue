<template>
  <nav class="m-menu" :class="classes">
    <ul class="m-menu__list">
      <li class="m-menu__item" v-for="(item, index) in items" :key="index">
        <NuxtLink :class="{ active: $route.name === item.name }" class="m-menu__link" :to="item.link">
          {{ item.anchor }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
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
}));
</script>

<style lang="scss">
@import './m-menu.scss';
</style>
