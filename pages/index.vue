<template>
  <main class="s-main">
    <div class="column l-wide">
      <s-intro />
      <s-photo />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
