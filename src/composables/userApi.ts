import user from '@/api/methods/user'

export default {
  login: () => {
    const { data, onSuccess } = useRequest(user.login)

    return {
      loginData: data,
      getLoginSucceed: onSuccess,
    }
  },
  getUserInfo: (userId: string) => {
    const { data, onSuccess } = useRequest(user.getUserInfo(userId))

    return {
      userInfo: data,
      getUserInfoSucceed: onSuccess,
    }
  },
  updateUserInfo: (userId: string, nickName: string, avatarUrl: string) => {
    const { data, onSuccess } = useRequest(user.updateUserInfo(userId, nickName, avatarUrl))

    return {
      userInfo: data,
      updateUserInfoSucceed: onSuccess,
    }
  },
  getOpenId: (code: string) => {
    const { data, onSuccess } = useRequest(user.getOpenId(code))

    return {
      userInfo: data,
      getOpenIdSucceed: onSuccess,
    }
  },
}
