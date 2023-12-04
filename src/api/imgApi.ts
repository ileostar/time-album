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

}
