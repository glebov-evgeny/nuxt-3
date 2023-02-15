<template>
  <div class="m-review-card">
    <div class="m-review-card__header">
      <div class="m-review-card__picture">
        <nuxt-img
          preset="cover"
          loading="lazy"
          placeholder
          :src="review.attributes.image_url"
          :alt="review.attributes.name"
          class="m-review-card__image"
        />
      </div>
      <div class="m-review-card__info">
        <h3 class="m-review-card__title">{{ review.attributes.name }}</h3>
        <div class="m-review-card__date">{{ review.attributes.date_published }}</div>
      </div>
    </div>
    <div class="m-review-card__description">
      {{ review.attributes.text }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  review: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
@import './m-review-card.scss';
</style>
