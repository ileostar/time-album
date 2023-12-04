export default {
  /**
   * 登陆
   *
   * @param {string} openId - The unique identifier of the user.
   * @param {string} nickName - The nickname of the user.
   * @param {string} avatarUrl - The URL of the user's avatar.
   * @return {Promise<unknown>} A Promise that resolves to the result of the login request.
   */
  login: (openId: string, nickName: string, avatarUrl: string) => {
    return http.get('user/login', {
      openId,
      nickName,
      avatarUrl,
    })
  },

  /**
   * 获取用户信息
   *
   * @param {string} userId - The ID of the user to retrieve information for.
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
   * @param {string} userId - The ID of the user.
   * @param {string} nickName - The new nickname for the user.
   * @param {string} avatarUrl - The new avatar URL for the user.
   * @return {Promise<any>} A promise that resolves to the updated user information.
   */
  updateUserInfo: (userId: string, nickName: string, avatarUrl: string) => {
    return http.get('/user/update', {
      userId,
      nickName,
      avatarUrl,
    })
  },

  /**
   * 返回openId
   *
   * @param {string} code - The code to retrieve the OpenID for.
   * @return {Promise<any>} - A Promise that resolves to the OpenID.
   */
  getOpenId: (code: string) => {
    return http.get('/user/getOpenId', {
      code,
    })
  },
}
