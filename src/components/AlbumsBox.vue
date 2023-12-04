<template>
  <section class="layout">
    <slot />
  </section>
</template>

<style scoped>
.layout {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
</style>
