<script lang="ts">
export default {
  props: {},
  setup() {
    const state = reactive({
      count: Array.from({ length: 100 }).fill(0),
    })

    return { ...toRefs(state) }
  },
}
</script>

<template>
  <nut-sticky>
    <nut-searchbar>
      <template #leftin>
        <nut-icon name="search2" />
      </template>
    </nut-searchbar>
  </nut-sticky>
  <ImagesBox>
    <ImageItem />
    <ImageItem />
    <ImageItem />
  </ImagesBox>
</template>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
.demo {
  .nut-cell {
    height: 100%;
  }
  .nut-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    background-color: #f4a8b6;
    border-radius: 10px;
  }
}
</style>
