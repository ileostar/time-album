/**
 * @ileostar 用户相关接口
 */
export default {
  /**
   * 用户登陆
   *
   * @param {string} openId - 微信小程序openId
   * @param {string} nickName - 用户昵称
   * @param {string} avatarUrl - 用户头像地址
   * @return {Promise<unknown>} A Promise that resolves to the result of the login request.
   */
  login: (openId: string, nickName: string, avatarUrl: string) => {
    return http.post('user/login', {
      openId,
      nickName,
      avatarUrl,
    })
  },

  /**
   * 获取用户信息
   *
   * @param {string} userId - 用户Id
   * @return {Promise} A Promise that resolves to the user information.
   */
  getUserInfo: (userId: string) => {
    return http.get('/user/getOne', {
      userId,
    })
  },

  /**
   * 更新用户信息
   *
   * @param {string} userId - 用户Id
   * @param {string} nickName - 用户昵称
   * @param {string} avatarUrl - 用户头像地址
   * @return {Promise<any>} A promise that resolves to the updated user information.
   */
  updateUserInfo: (userId: string, nickName?: string, avatarUrl?: string) => {
    return http.put('/user/update', {
      userId,
      nickName,
      avatarUrl,
    })
  },

  /**
   * 返回openId
   *
   * @param {string} code - 微信小程序获取code
   * @return {Promise<any>} - A Promise that resolves to the OpenID.
   */
  getOpenId: (code: string) => {
    return http.get('/user/getOpenId', {
      code,
    })
  },
}
