<script setup lang="ts">
import type { ToastInst } from 'nutui-uniapp'

const visible1 = ref(false)
const toastRef = ref<ToastInst>()
function onCancel() {
  // eslint-disable-next-line no-console
  console.log('event cancel')
}
function onOk() {
  // eslint-disable-next-line no-console
  console.log('event ok')
}
function baseClick(): void {
  visible1.value = true
}

const { updateUserInfos } = useStore('users')

/**
 * Executes a click event on a ref.
 *
 * @param {string} type - The type of the toast to show.
 * @param {string} msg - The message to display in the toast.
 */
function refClick(type: string, msg: string) {
  toastRef.value?.showToast[type as 'fail' | 'success' | 'warn' | 'loading'](msg, {
    title: '使用ref调用更加方便与灵活',
    duration: 0,
  })

  setTimeout(() => {
    toastRef.value?.hideToast()
  }, 1000)
}

/**
 * 小程序登陆
 *
 * @returns {Promise<void>} A promise that resolves when the user is logged in successfully.
 * @throws {Error} If an error occurs during the login process.
 */
async function wxLogin(): Promise<void> {
  try {
    const p1 = await uni.login()
    const p2 = await uni.getUserProfile()
    const openidReq = await userApi.getOpenId(p1.code)
    if (openidReq.data.code === 200) {
      const loginReq = await userApi.login(openidReq.data.data.openid, p2.userInfo.nickName, p2.userInfo.avatarUrl)
      if (loginReq.data.code === 200) {
        updateUserInfos(loginReq.data.data) // 更新用户数据
        refClick('success', '登陆成功')
      }
      else {
        refClick('fail', '登陆失败')
      }
    }
    else {
      refClick('fail', '获取openid错误')
    }
  }
  catch (error) {
    console.error(error)
    refClick('fail', '发生错误')
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
      <div class="people" flex="~ 1" w="50%" relative h-full items-end justify-center overflow-hidden rd-3 shadow-sm blur="0.5">
        <h3 mb-2 color-white>
          人物
        </h3>
      </div>
      <div class="landscape" flex="~ 1" w="50%" relative h-full items-end justify-center overflow-hidden rd-3 shadow-sm blur="0.5">
        <h3 mb-2 color-white>
          风景
        </h3>
      </div>
    </div>
    <nut-dialog v-model:visible="visible1" title="基础弹框" content="这是基础弹框。" @cancel="onCancel" @ok="onOk" />
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
