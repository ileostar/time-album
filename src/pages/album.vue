<script setup lang="ts">
const { albums, getAllAlbums } = useStore('albums')
onMounted(() => {
  getAllAlbums()
})
</script>

<template>
  <AlbumsBox mt-3>
    <AlbumItem v-for="item in albums" :key="item.albumId" />
  </AlbumsBox>
  <AddAlbumIcon />
</template>

<route type="searchPage" lang="json">
  {
    "layout": "searchPage"
  }
</route>
