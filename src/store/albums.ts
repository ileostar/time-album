interface IAlbums {
  albumId: string
  albumName: string
  type: string
  imageUrl: string
  createTime: string
}

export default defineStore('album', () => {
  /***
   * 当前选中菜单的索引，默认为第一个菜单
   */
  const albums = ref<Array<IAlbums>>()

  /**
   * 获取所有相册信息
   *
   * @return {Promise<void>} Returns a Promise that resolves when the albums have been updated.
   */
  const getAllAlbums = async () => {
    try {
      const req = await albumApi.getAllAlbum()
      if (req.data.code === 200)
        albums.value = req.data.data
      else
        // eslint-disable-next-line no-console
        console.log('获取相册信息失败')
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  /**
   * 新增相册
   *
   * @param {string} useId - 用户Id
   * @param {string} albumName - 相册名
   * @return {Promise<void>} A promise that resolves when the album is added successfully.
   */
  const addAlbum = async (useId: string, albumName: string) => {
    try {
      const req = await albumApi.addAlbum(useId, albumName)
      if (req.data.code === 200)
        // eslint-disable-next-line no-console
        console.log('新增相册成功')
      else
        // eslint-disable-next-line no-console
        console.log('新增相册失败')
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
    getAllAlbums()
  }

  /**
   * 更新相册
   *
   * @param {string} albumId - 相册Id
   * @param {string} albumName - 相册名
   * @return {Promise<void>} - A promise that resolves when the album is updated.
   */
  const updateAlbum = async (albumId: string, albumName: string) => {
    try {
      const req = await albumApi.updateAlbum(albumId, albumName)
      if (req.data.code === 200)
        // eslint-disable-next-line no-console
        console.log('更新相册成功')
      else
        // eslint-disable-next-line no-console
        console.log('更新相册失败')
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
    getAllAlbums()
  }

  /**
   * 删除相册
   *
   * @param {string} albumId - 相册Id
   * @return {Promise<void>} - A promise that resolves with no value.
   */
  const deleteAlbum = async (albumId: string) => {
    try {
      const req = await albumApi.deleteAlbum(albumId)
      if (req.data.code === 200)
        // eslint-disable-next-line no-console
        console.log('更新相册成功')
      else
        // eslint-disable-next-line no-console
        console.log('更新相册失败')
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
    getAllAlbums()
  }
  return {
    albums,
    getAllAlbums,
    addAlbum,
    updateAlbum,
    deleteAlbum,
  }
})
