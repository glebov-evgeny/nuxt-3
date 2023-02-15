<template>
  <div class="m-partner-card">
    <a :href="partner.attributes.link" target="_blank" class="m-partner-card__link">
      <nuxt-img
        preset="cover"
        loading="lazy"
        placeholder
        :src="partner.attributes.image_url"
        :alt="partner.attributes.name || partner.attributes.url"
        class="m-partner-card__image"
      />
    </a>
  </div>
</template>

<script setup>
defineProps({
  partner: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
@import './m-partner-card.scss';
</style>
