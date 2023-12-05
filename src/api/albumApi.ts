/**
 * @ileostar 相册相关接口
 */
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
  getRecentPhotoAlbums: () => {
    return http.get('/images/listByTime')
  },

  /**
   * 新增相册
   *
   * @param {string} userId - 用户Id
   * @param {string} albumName - 相册名
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
   * @param {string} albumId - 相册Id
   * @param {string} albumName - 相册名
   * @return {unknown} The response from the HTTP post request.
   */
  updateAlbum: (albumId: string, albumName: string) => {
    return http.put('/album/update', {
      albumId,
      albumName,
    })
  },

  /**
   * 删除相册
   *
   * @param {string} albumId - 相册Id
   * @return {Promise<any>} A promise that resolves when the album is deleted.
   */
  deleteAlbum: (albumId: string) => {
    return http.delete('/album/delete', {
      albumId,
    })
  },

  /**
   * 获取相册所有图片.
   *
   * @param {string} albumId - 相册Id
   * @return {Promise<any>} - A promise that resolves with the response from the server.
   */
  getAllAlbumImg: (albumId: string) => {
    return http.get('/images/getAll', {
      albumId,
    })
  },

}
