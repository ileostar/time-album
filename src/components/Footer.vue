<script setup lang="ts">
/**
 * 页面跳转
 * @param url string
 * @returns void
 */
function go(url: string) {
  uni.switchTab({
    url,
  })
}
</script>

<template>
  <view class="fixed bottom-0 tab" b="solid 0 t-1 gray/20" z-999 box-border h-15 w-full flex items-center justify-between overflow-hidden px-5 -mx-5 dark:bg-black light:bg-white>
    <button @click="go('/pages/index')">
      照片
    </button>
    <button @click="go('/pages/album')">
      相册
    </button>
    <button @click="go('/pages/find')">
      发现
    </button>
    <button @click="go('/pages/me')">
      我的
    </button>
  </view>
</template>
