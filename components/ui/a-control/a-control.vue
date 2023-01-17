<template>
  <label class="a-control">
    <input
      class="a-control__input"
      :type="typeControl"
      v-model="valueThis"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
      @click="handleClick"
    />
    <div class="a-control__container">
      <div class="a-control__trigger" :class="triggerClasses" />
      <div class="a-control__text" v-if="text || $slots.default">
        <slot>
          {{ text }}
        </slot>
      </div>
    </div>
  </label>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  typeControl: {
    type: String,
    validator(value) {
      return ['checkbox', 'radio'].indexOf(value) !== -1;
    },
    default: 'checkbox',
  },
  checked: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const valueThis = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});

const triggerClasses = computed(() => ({
  'a-control__trigger--checked': valueThis.value,
}));
</script>

<style lang="scss">
@import './a-control.scss';
</style>
