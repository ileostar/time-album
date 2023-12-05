interface IUserInfos {
  userId: string
  openId: string
  nickName: string
  avatarUrl: string
}

export default defineStore('moment', () => {
  /***
   * 当前选中菜单的索引，默认为第一个菜单
   */
  const userInfos = ref<IUserInfos>()

  const updateUserInfos = (params: IUserInfos) => {
    userInfos.value = params
  }
  return {
    userInfos,
    updateUserInfos,
  }
})
