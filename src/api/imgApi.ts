/**
 * @ileostar 图片相关接口
 */
export default {
  /**
   * 查看图片详情
   *
   * @param {number} imageId - The ID of the image.
   * @return {Promise<any>} A Promise that resolves to the response data.
   */
  getImgInfo: (imageId: number) => {
    return http.get('/images/getOne', {
      imageId,
    })
  },

  /**
   * 新增图片
   *
   * @param {MultipartFile} image - The image file to be saved.
   * @param {string} albumId - The ID of the album to which the image belongs.
   * @return {Promise<any>} - A promise that resolves to the server response.
   */
  addImg: (image: string, albumId: string) => {
    return http.post('/images/save', {
      image,
      albumId,
    })
  },

  /**
   * 修改图片所在相册
   *
   * @param {string} imageId - 图片Id
   * @param {string} orgAlbumId - 原相册Id
   * @param {string} updateAlbumId - 修改后相册Id
   * @param {number} type - 修改方式(移动/复制)
   * @return {Promise} A promise that resolves to the updated image.
   */
  updateImgPosition: (imageId: string, orgAlbumId: string, updateAlbumId: string, type: number) => {
    return http.put('/images/update', {
      imageId,
      orgAlbumId,
      updateAlbumId,
      type,
    })
  },

  /**
   * 删除图片
   *
   * @param {string} imageId - 图片Id
   * @param {string} albumId - 相册Id
   * @return {Promise} A promise that resolves to the result of the deletion operation.
   */
  deleteImag: (imageId: string, albumId: string) => {
    return http.delete('/images/delete', {
      imageId,
      albumId,
    })
  },
}
