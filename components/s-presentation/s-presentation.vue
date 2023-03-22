<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-presentation">
    <div class="s-presentation__container l-wide">
      <h2 class="s-presentation__title s-title">{{ $t('presentation.title') }}</h2>
      <div class="s-presentation__block">
        <p class="s-presentation__description" v-html="$t('presentation.description')"></p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-presentation.scss';
</style>
