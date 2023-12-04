<template>
  <section class="layout">
    <slot />
  </section>
</template>

<style scoped>
.layout {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}
</style>
