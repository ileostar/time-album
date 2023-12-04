<script setup lang="ts">
// const albums = [
//   {
//     albumId: '123456',
//     albumName: 'xxx',
//     type: '0', // 默认
//     imageUrl: 'xxx/xxx/xxxx', // 封面
//     createTime: '2021-05-27 09:16:58',
//   },
//   {
//     albumId: '123456',
//     albumName: 'xxx',
//     type: '0', // 默认
//     imageUrl: 'xxx/xxx/xxxx', // 封面
//     createTime: '2021-05-27 09:16:58',
//   },
// ]
</script>

<template>
  <nut-sticky>
    <nut-searchbar>
      <template #leftin>
        <nut-icon name="search2" />
      </template>
    </nut-searchbar>
  </nut-sticky>
  <AlbumsBox mt-3>
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
  </AlbumsBox>
  <AddAlbum />
</template>
