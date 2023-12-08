<template>
  <view flex="~ col" box-border h-full w-full justify-between px-5 text-center>
    <div class="search-box">
      <nut-sticky>
        <nut-searchbar background="transparent" input-background="rgba(200,200,200,0.8)">
          <template #leftin>
            <nut-icon name="search2" />
          </template>
        </nut-searchbar>
      </nut-sticky>
    </div>
    <slot />
    <Tabbar />
  </view>
</template>
