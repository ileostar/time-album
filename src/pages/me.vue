<script lang="ts" setup>
const { value: name } = useQuery('name')
</script>

<template>
  <view flex="~ col" border-box h-full w-full>
    <view border-box relative h-40>
      <nut-avatar z-1 -m-20 size="large">
        <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png">
      </nut-avatar>
      <view border-box relative h-full w-full rd-5 bg-white pt-10 opacity-70 -z-1 -mt-10>
        <p color="#000">
          name
        </p>
        <p color="#000">
          name
        </p>
      </view>
    </view>
    <view flex-1 bg-white color-white>
      {{ name }}
    </view>
  </view>
</template>

<route lang="json">
{}
</route>
