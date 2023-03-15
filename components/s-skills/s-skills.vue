<template>
  <section class="s-skills">
    <div class="s-skills__container l-wide">
      <h2 class="s-skills__title s-title">{{ $t('skills.title') }}</h2>
      <div class="s-skills__block">
        <div v-for="(item, key) in $tm('skills.item')" :key="key" class="s-skills__item">
          <h3 class="s-skills__item-title">{{ $rt(item.title) }}</h3>
          <div class="s-skills__item-grade">
            <div class="s-skills__item-grade-line"></div>
            <div class="s-skills__item-grade-number">{{ $rt(item.grade) }}%</div>
          </div>
          <p class="s-skills__item-info">{{ $rt(item.info) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-skills.scss';
</style>
