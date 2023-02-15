<template>
  <main class="s-main">
    <s-platform />
    <div class="l-wide">
      <s-directions />
      <s-professions />
      <s-steps />
      <s-media />
      <s-whysa />
      <s-reviews />
      <s-partners :partners="partners" />
    </div>
  </main>
</template>

<script setup>
import { useLanderStore } from '~~/store/lander';
import getPartners from '~~/api/getPartners';

const partnersOpt = {
  query: {
    'filter[status]': 'published',
  },
};

const partners = await getPartners(partnersOpt);
const store = useLanderStore();
store.getLanderInfo();
</script>
