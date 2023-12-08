<!-- eslint-disable no-console -->
<script setup lang="ts">
const { userInfos } = useStore('users')
const { addAlbum } = useStore('albums')

const formData = reactive({
  albumName: '',
})

const ruleForm = ref<any>(null)

function submit() {
  ruleForm.value.validate().then(({ valid, errors }: any) => {
    if (valid)
      addAlbum(userInfos.value?.userId as string, formData.albumName)
    else
      console.log('error submit!!', errors)
  })
}
function reset() {
  ruleForm.value.reset()
}
// 失去焦点校验
function customBlurValidate(prop: string) {
  ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
    if (valid)
      console.log('success', formData)
    else
      console.log('error submit!!', errors)
  })
}
// 函数校验
const nameLengthValidator = (val: string) => val?.length >= 2
</script>

<template>
  <nut-form
    ref="ruleForm" :model-value="formData" :rules="{ name: [
      { required: true, message: '请填写姓名' },
      {
        message: 'name 至少两个字符',
        validator: nameLengthValidator,
      }] }"
  >
    <nut-form-item label="姓名" prop="name">
      <nut-input
        v-model="formData.albumName" class="nut-input-text" placeholder="请输入相册名"
        type="text" @blur="customBlurValidate('name')"
      />
    </nut-form-item>
    <nut-cell>
      <nut-button type="info" size="small" style="margin-right: 10px" @click="submit">
        提交
      </nut-button>
      <span w-1 />
      <nut-button size="small" @click="reset">
        重置提示状态
      </nut-button>
    </nut-cell>
  </nut-form>
</template>
