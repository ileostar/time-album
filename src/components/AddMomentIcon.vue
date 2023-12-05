<!-- eslint-disable no-console -->
<script setup lang="ts">
function clickAddBtn() {
  console.log('222')
}
</script>

<template>
  <div class="fixed bottom-25 right-5" blur="0.3" bg="blue-500/95" h-12 w-12 flex items-center justify-center rd-10 shadow-lg @click="clickAddBtn">
    <span i-carbon:add-large text-8 font-bold color-white />
  </div>
</template>
