<script setup lang="ts">
/***
 * 当前选中菜单的索引，默认为第一个菜单
 */
const currIndex = ref(0)

/**
 * 页面跳转
 * @param url string
 */
function tabClick(url: string, index: number) {
  // eslint-disable-next-line no-console
  console.log(index)
  uni.switchTab({
    url,
  })
  currIndex.value = index
}

/**
 * 动态生成类名
 *
 * @param {number} index - The index of the menu item.
 * @return {string} The generated class string.
 */
async function classAction(index: number) {
  return currIndex.value === index ? 'active' : ''
}

/**
 * TabBar信息
 */
const menu = [
  {
    // 菜单名称
    name: '照片',
    // 阿里巴巴矢量图标库引入图标
    icon: 'i-carbon:image',
    path: '/pages/index',
  },
  {
    name: '相册',
    icon: 'i-carbon:image-copy',
    path: '/pages/album',
  },
  {
    name: '发现',
    icon: 'i-carbon:research-bloch-sphere',
    path: '/pages/find',
  },
  {
    name: '我的',
    icon: 'i-carbon:user-avatar',
    path: '/pages/user',
  },
]
</script>

<template>
  <view class="fixed bottom-0" b="solid 0 t-1 gray/20" z-999 box-border h-15 w-full flex items-center justify-between px-8 -mx-5 dark:bg-black light:bg-white>
    <view v-for="item, index in menu" :key="item.name" flex>
      <view :class="classAction(index)" @click="tabClick(item.path, index)">
        <i text-6 :class="item.icon" />
      </view>
    </view>
  </view>
</template>

<style>
.active {
  color: aqua;
}
</style>
