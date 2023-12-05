<template>
  <view flex="~ col" box-border h-full w-full justify-between px-5 text-center>
    <nut-sticky>
      <nut-searchbar>
        <template #leftin>
          <nut-icon name="search2" />
        </template>
      </nut-searchbar>
    </nut-sticky>
    <slot />
    <Tabbar />
  </view>
</template>
