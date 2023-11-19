<script lang="ts" setup>
const { value: name } = useQuery('name')
</script>

<template>
  <view>{{ name }}</view>

  <HiCounter />

  <nut-button type="primary">
    主要按钮
  </nut-button>
</template>
