<script setup lang="ts">
function go() {
    uni.navigateTo({
      url: `/pages/hi?name=${111}`,
    })
}
</script>

<template>
  <view text="xl gray4" m-5 flex items-center justify-center gap-3>
    <navigator url="/pages/index" open-type="redirect">
      <view i-carbon-campsite />
    </navigator>

    <view cursor-pointer @click="go">
      <view i-carbon:logo-github />
    </view>
  </view>
</template>
