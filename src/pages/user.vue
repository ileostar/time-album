<script setup lang="ts">
function baseClick(): void {
  uni.navigateTo({ url: '/pages/child/setting' })
}

function toPeoPle(): void {
  uni.navigateTo({ url: '/pages/child/albumDetail' })
}
function toLandscape(): void {
  uni.navigateTo({ url: '/pages/child/albumDetail' })
}
const { updateUserInfos } = useStore('users')

/**
 * 小程序登陆
 *
 * @returns {Promise<void>} A promise that resolves when the user is logged in successfully.
 * @throws {Error} If an error occurs during the login process.
 */
async function wxLogin(): Promise<void> {
  try {
    const p1 = await uni.login({
      provider: 'weixin',
    })
    const p2 = await uni.getUserInfo()
    const openidReq = await userApi.getOpenId(p1.code)
    // eslint-disable-next-line no-console
    console.log(openidReq)
    if (openidReq.data.code === 200) {
      // eslint-disable-next-line no-console
      console.log(openidReq.data.data)
      const loginReq = await userApi.login(openidReq.data.data, p2.userInfo.nickName, p2.userInfo.avatarUrl)
      // eslint-disable-next-line no-console
      console.log(loginReq)
      if (loginReq.data.code === 200) {
        updateUserInfos(loginReq.data.data) // 更新用户数据
        // eslint-disable-next-line no-console
        console.log('success', '登陆成功')
        useToasts('success', '登陆成功')
      }
      else {
        // eslint-disable-next-line no-console
        console.log('fail', '登陆失败')
        useToasts('fail', '登陆失败')
      }
    }
    else {
      useToasts('fail', '获取openid错误')
    }
  }
  catch (error) {
    console.error(error)
    useToasts('fail', '发生错误')
  }
}
</script>

<template>
  <view flex="~ col" box-border h-full w-full>
    <view mt-2 light:bg="gray-200/30" dark:bg="gray" box-border h-30 flex items-center justify-between gap-5 rd-5 px-5 shadow-sm>
      <div @click="wxLogin">
        <nut-avatar z-1 -m-20 size="large">
          <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png">
        </nut-avatar>
      </div>
      <view flex="~ col" box-border flex-1 items-start>
        <p text-5 font-bold>
          LeoStar
        </p>
        <p text-3 color-gray-5>
          青铜
        </p>
      </view>
      <span i-carbon:chevron-right text-7 color-gray @click="baseClick" />
    </view>
    <div mt-3 h-10 flex items-center>
      <span h-5 w-1 bg-blue />
      <h3 ml-3 font-bold>
        智能图像
      </h3>
    </div>
    <div mt-1 h-30 w-full flex gap-2 overflow-hidden>
      <div class="people" flex="~ 1" w="50%" relative h-full items-end justify-center overflow-hidden rd-3 shadow-sm blur="0.5" @click="toPeoPle">
        <h3 mb-2 color-white>
          人物
        </h3>
      </div>
      <div class="landscape" flex="~ 1" w="50%" relative h-full items-end justify-center overflow-hidden rd-3 shadow-sm blur="0.5" @click="toLandscape">
        <h3 mb-2 color-white>
          风景
        </h3>
      </div>
    </div>
  </view>
</template>

<style>
.people {
  background-image: url('https://ts1.cn.mm.bing.net/th/id/R-C.57170d3d0875233cb3ba434e61a8d0ec?rik=xIElgarHgUfmiA&riu=http%3a%2f%2fsc.68design.net%2fphotofiles%2f201901%2f3IME6jvHWl.jpg&ehk=O0xKV8MOnNRn18PapEoKmsftrBNGmgscWfM7ExczdDA%3d&risl=&pid=ImgRaw&r=0');
  background-size: cover;
}
.landscape {
  background-image: url('https://ts1.cn.mm.bing.net/th/id/R-C.3e42ad7c7744a7a612bfbaa480405611?rik=eX46Dun%2fFF1aDg&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f25%2f6125.jpg&ehk=ukEQFHgNgClnZxjkosi%2bP3OoaZicxvcitCFcgJISxww%3d&risl=&pid=ImgRaw&r=0');
  background-size: cover;
}
</style>

<route type="userPage" lang="json">
  {
    "layout": "userPage"
  }
</route>
