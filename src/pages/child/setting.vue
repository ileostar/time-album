<script setup lang="ts">
import type { IUserInfos } from '@/store/users'

const { userInfos } = useStore('users')
const userData = ref<IUserInfos>({
  userId: '',
  openId: '',
  nickName: '',
  avatarUrl: '',
})

watchEffect(() => {
  userData.value = JSON.parse(JSON.stringify(userInfos.value))
})
</script>

<template>
  <nut-form>
    <nut-form-item label="姓名">
      <nut-input v-model="userData.nickName" class="nut-input-text" placeholder="请输入姓名" type="text" />
    </nut-form-item>
    <nut-form-item label="头像">
      <nut-input v-model="userData.avatarUrl" class="nut-input-text" placeholder="请输入年龄" type="text" />
    </nut-form-item>
  </nut-form>
</template>
