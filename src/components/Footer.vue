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
function classAction(index: number) {
  const ret = ['menu-item']
  if (currIndex.value === index)
    ret.push('active')
  // eslint-disable-next-line no-console
  console.log(ret)
  return ret.join(' ')
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
    path: '/pages/me',
  },
]
</script>

<template>
  <view class="tabbar-box fixed bottom-0 tab" b="solid 0 t-1 gray/20" z-999 box-border h-15 w-full flex items-center justify-between px-5 -mx-5 dark:bg-black light:bg-white>
    <view v-for="item, index in menu" :key="item.name" flex>
      <view :class="classAction(index)" @click="tabClick(item.path, index)">
        <i text-6 :class="item.icon" />
        <p opacity-0>
          {{ item.name }}
        </p>
      </view>
    </view>
    <!-- 添加选中圆形 -->
    <view class="active-tabbar-box" />
  </view>
</template>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  /* 竖向垂直居中 */
  flex-direction: column;
  width: 100rpx;
  height: 100%;
  position: relative;
}

.menu-item i {
  font-size: 100rpx;
  /* 添加过渡效果 */
  transition: all .5s;
}

.menu-item p {
  font-size: 26rpx;
  font-weight: bold;
  color: #222;
  position: absolute;
  transform: translateY(50rpx);
  /* 添加过渡效果 */
  transition: all .5s;
}

/* 设置菜单选中样式 */
.menu-item .active i {
  transform: translateY(-60rpx);
}

.menu-item .active p {
  opacity: 1;
  transform: translateY(22rpx);
}

/* 菜单选中圆形样式 */
.active-tabbar-box {
  width: 100rpx;
  height: 100rpx;
  background: blue;
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  border: 10rpx solid var(--color);
  --left-pad: calc(50rpx - (4 * var(--w)));
  left: calc((var(--left-pad) / 2) + (var(--w) /2 - (var(--c) / 2)));
  top: calc(-50% + constant(safe-area-inset-bottom) / 2);
  top: calc(-50% + env(safe-area-inset-bottom) / 2);
  z-index: -1;
  /* 添加过渡效果 */
  transition: all .5s;
  /* 设置选中偏移 */
  transform: translateX(calc(var(--w) * var(--n)));
}

/* 菜单选中圆形样式添加前后圆滑凹凸 */
.active-tabbar-box::after, .active-tabbar-box::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 30rpx;
  height: 30rpx;
  background: transparent;
}

.active-tabbar-box::before {
  left: -33rpx;
  border-radius: 0 30rpx 0 0;
  box-shadow: 0 -15rpx 0 0 var(--color);
}

.active-tabbar-box::after {
  right: -33rpx;
  border-radius: 30rpx 0 0 0;
  box-shadow: 0 -15rpx 0 0 var(--color);
}
</style>
