<template>
  <view flex="~ col" box-border h-full w-full justify-between px-5 text-center>
    <nut-sticky>
      <nut-searchbar background="transparent" input-background="rgba(125,125,125,0.15)">
        <template #leftin>
          <nut-icon name="search2" />
        </template>
      </nut-searchbar>
    </nut-sticky>
    <slot />
    <Tabbar />
  </view>
</template>
