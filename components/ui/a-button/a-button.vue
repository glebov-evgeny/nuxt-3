<template>
  <button class="a-button" type="button" :class="classes" :disabled="disabled">
    <img v-if="hasIconLink" :src="iconLink" alt="" class="a-button__icon" />
    <span v-if="!hasIconLink" class="a-button__label">{{ label }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  iconLink: {
    type: String,
    default: '',
    required: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator(value) {
      return ['xlarge', 'large', 'medium', 'small'].indexOf(value) !== -1;
    },
    default: 'medium',
  },
  type: {
    type: String,
    validator(value) {
      return ['primary', 'secondary', 'accent', 'outline', 'icon'].indexOf(value) !== -1;
    },
    default: 'primary',
  },
});

const classes = computed(() => ({
  'a-button': true,
  [`a-button--${props.size}`]: true,
  [`a-button--${props.type}`]: true,
  'a-button--disabled': props.disabled,
  'a-button--block': props.block,
}));

const hasIconLink = computed(() => props.iconLink && props.iconLink.length);
</script>

<style lang="scss">
@import './a-button.scss';
</style>
