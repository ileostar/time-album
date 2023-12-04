<template>
  <section class="layout">
    <slot />
    <div flex="~ col" mt-1 items-center justify-start bg-blue>
      <div flex="~" mt-1 items-center gap-3>
        +
      </div>
    </div>
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
