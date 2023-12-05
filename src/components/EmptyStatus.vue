<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const tabValue = ref(0)
    return {
      tabValue,
    }
  },
}
</script>

<template>
  <nut-tabs v-model="tabValue">
    <nut-tab-pane title="无内容">
      <nut-empty image="empty" description="无内容" />
    </nut-tab-pane>
    <nut-tab-pane title="加载失败/错误">
      <nut-empty image="error" description="加载失败/错误" />
    </nut-tab-pane>
    <nut-tab-pane title="无网络">
      <nut-empty image="network" description="无网络" />
    </nut-tab-pane>
  </nut-tabs>
</template>
