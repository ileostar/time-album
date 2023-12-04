<script setup lang="ts">
defineProps({
  imgUrl: {
    type: String,
    default: 'https://img.leostar.top/study/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202306251523043.jpg',
    require: true,
  },
})
</script>

<template>
  <div flex="~ col" mt="1.5" items-center justify-start>
    <img :src="imgUrl" rd-2 shadow-md style="height: 320rpx;width:320rpx" alt="">
  </div>
</template>
