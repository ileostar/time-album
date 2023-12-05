/**
 * @ileostar 搜索相关接口
 */
export default {
  /**
   * 搜索相册或者图片
   *
   * @param {stirng} context - 搜索内容
   * @return {Promise<any>} A Promise that resolves to the response data.
   * @example context：（相册名 2023-10-23）
   */
  searchAll: (context: string) => {
    return http.get('/search/searchAll', {
      context,
    })
  },
}
