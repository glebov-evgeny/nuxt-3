<template>
  <section class="dumb">
    <h2>{{ $t('title') }}</h2>
    <p>{{ $t('description') }}</p>
  </section>
</template>

<script setup>
import './s-dumb.scss';
// @import './s-dumb2.json';
//   <i18n lang="json" src="./s-dumb2.json" />
</script>

<i18n lang="json" src="./s-dumb.json" />
