<template>
  <div class="a-popup" v-if="visible">
    <div class="a-popup__backdrop" @click="closePopup" @keydown.esc="closePopup" />
    <div class="a-popup__container" :style="`max-width: ${width}`">
      <div class="a-popup__close" @click="closePopup" @keydown.esc="closePopup" />
      <div class="a-popup__content" v-if="type !== 'iframe'">
        <slot />
      </div>
      <div class="a-popup__iframe" v-else>
        <iframe
          title=""
          :src="link"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    validator: (value) => ['iframe', 'content'].indexOf(value) !== -1,
    default: 'content',
  },
  link: {
    type: String,
    default: '#',
  },
  width: {
    type: String,
    default: '100%',
  },
});

const emit = defineEmits(['close']);

const closePopup = () => emit('close');
</script>

<style lang="scss">
@import './a-popup.scss';
</style>
