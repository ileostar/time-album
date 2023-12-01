<script setup lang="ts">
defineProps({
  imgUrl: {
    type: String,
    default: 'https://img.leostar.top/study/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202306251523043.jpg',
    require: true,
  },
  desc: {
    type: String,
    default: '全部',
  },
  count: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div flex="~ col" mt-1 items-center justify-start>
    <img :src="imgUrl" rd-5 style="height: 190rpx;width:190rpx" alt="">
    <div flex="~" mt-1 items-center gap-3>
      <text text-3>
        {{ desc }}
      </text>
      <text ml-1 opacity-90 text="2.5">
        {{ count }}
      </text>
    </div>
  </div>
</template>
