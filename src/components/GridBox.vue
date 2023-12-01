<template>
  <section class="layout">
    <slot />
  </section>
</template>

<style>
.layout {
  width: 100%;
  height: auto;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
</style>
