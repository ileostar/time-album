export default {
  /**
   * 获取所有相册
   *
   * @return {Promise<any>} A Promise that resolves with the response data.
   */
  getAllAlbum: () => {
    return http.get('/album/getAll')
  },

  /**
   * 查看近期相册
   *
   * @return {Promise} A Promise that resolves with the list of images.
   */
  getListByTime: () => {
    return http.get('/images/listByTime')
  },

  /**
   * 新增相册
   *
   * @param {string} userId - The ID of the user.
   * @param {string} albumName - The name of the album.
   * @return {Promise} A promise that resolves with the response from the server.
   */
  addAlbum: (userId: string, albumName: string) => {
    return http.post('/album/save', {
      userId,
      albumName,
    })
  },

  /**
   * 更新相册
   *
   * @param {string} albumId - The ID of the album to update.
   * @param {string} albumName - The new name for the album.
   * @return {unknown} The response from the HTTP post request.
   */
  updateAlbum: (albumId: string, albumName: string) => {
    return http.post('/album/update', {
      albumId,
      albumName,
    })
  },

  /**
   * 删除相册
   *
   * @param {string} albumId - The ID of the album to delete.
   * @return {Promise<any>} A promise that resolves when the album is deleted.
   */
  deleteAlbum: (albumId: string) => {
    return http.post('/album/delete', {
      albumId,
    })
  },

  /**
   * 获取相册所有图片.
   *
   * @param {string} albumId - The ID of the album.
   * @return {Promise<any>} - A promise that resolves with the response from the server.
   */
  getAllAlbumImg: (albumId: string) => {
    return http.post('/images/getAll', {
      albumId,
    })
  },

}
