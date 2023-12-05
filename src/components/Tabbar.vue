<script setup lang="ts">
const { active } = useStore('tabbar')

/**
 * 页面跳转
 * @param url string
 */
function tabSwitch(item: any, url: string) {
  // eslint-disable-next-line no-console
  console.log('active', active.value)
  uni.switchTab({
    url,
  })
}

/**
 * TabBar信息
 */
const TabbarInfos = [
  {
    // 菜单名称
    icon: 'i-carbon:image',
    name: '/pages/index',
  },
  {
    icon: 'i-carbon:image-copy',
    name: '/pages/album',
  },
  {
    icon: 'i-carbon:research-bloch-sphere',
    name: '/pages/find',
  },
  {
    icon: 'i-carbon:user-avatar',
    name: '/pages/user',
  },
]
</script>

<template>
  <nut-tabbar v-model="active" unactive-color="#7d7e80" active-color="#1989fa" :bottom="true" :safe-area-inset-bottom="true" @tab-switch="tabSwitch">
    <nut-tabbar-item v-for="item in TabbarInfos" :key="item.name" :name="item.name">
      <template #icon="props">
        <span v-if="props.active" text-6 color-blue :class="item.icon" />
        <span v-else text-6 :class="item.icon" />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>
