<script setup lang="ts">
const albums = [
  {
    albumId: '123456',
    albumName: 'xxx',
    type: '0', // 默认
    imageUrl: 'xxx/xxx/xxxx', // 封面
    createTime: '2021-05-27 09:16:58',
  },
  {
    albumId: '123456',
    albumName: 'xxx',
    type: '0', // 默认
    imageUrl: 'xxx/xxx/xxxx', // 封面
    createTime: '2021-05-27 09:16:58',
  },
]
</script>

<template>
  <view class="gird-box" rd-5 bg-gray>
    <view v-for="item in albums" :key="item.albumId" />
  </view>
</template>
