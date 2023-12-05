/**
 * @ileostar 日记相关接口
 */
export default {
  /**
   * 查看日记
   *
   * @return {Promise} A Promise that resolves with the response data.
   */
  getAllMoment: () => {
    return http.get('/note/getAll')
  },

  /**
   * 修改日记
   *
   * @param {string} noteId - 日记Id
   * @param {string} content - 内容
   * @param {Array<string>} List - 图片id集合
   * @param {string} emoji - 表情
   * @return {Promise<any>} - A promise that resolves to the updated moment.
   */
  updateMoment: (noteId: string, content: string, List: Array<string>, emoji: string) => {
    return http.put('/note/update', {
      noteId,
      content,
      List,
      emoji,
    })
  },

  /**
   * 新增日记
   *
   * @param {string} content - 内容
   * @param {Array<string>} List - 图片id集合
   * @param {string} emoji - 表情
   * @return {Promise} A promise that resolves to the result of the HTTP post request.
   */
  addMoment: (content: string, List: Array<string>, emoji: string) => {
    return http.post('/note/save', {
      content,
      List,
      emoji,
    })
  },

  /**
   * 删除日记
   *
   * @param {string} noteId - 日记Id
   * @return {Promise<any>} A promise that resolves with the result of the deletion.
   */
  deleteMoment: (noteId: string) => {
    return http.post('/note/delete', {
      noteId,
    })
  },
}
