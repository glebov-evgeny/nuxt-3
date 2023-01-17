<template>
  <div class="a-input" :class="classes">
    <label v-if="label" :for="attrs.id">{{ label }}</label>
    <div class="a-input__container">
      <textarea v-if="type == 'textarea'" />
      <input
        v-else
        class="a-input__textfield"
        v-bind="$attrs"
        :class="classesField"
        v-model="valueThis"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        ref="a-input"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    validator(value) {
      return ['large', 'medium', 'small'].indexOf(value) !== -1;
    },
    default: 'medium',
  },
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => ({
  'a-input': true,
  [`a-input--${props.size}`]: true,
}));

const classesField = computed(() => ({
  [`a-input__textfield--${props.size}`]: true,
}));

const valueThis = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>

<style lang="scss">
@import './a-input.scss';
</style>
