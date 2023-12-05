<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { FormItemRuleWithoutValidator } from 'nutui-uniapp'

const formData = reactive({
  name: '',
  age: '',
  tel: '',
  address: '',
})
// eslint-disable-next-line unused-imports/no-unused-vars
function validate(item: any) {
  console.log(item)
}
const ruleForm = ref<any>(null)

function submit() {
  ruleForm.value.validate().then(({ valid, errors }: any) => {
    if (valid)
      console.log('success', formData)
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
const customValidator = (val: string) => /^\d+$/.test(val)
function customRulePropValidator(val: string, rule: FormItemRuleWithoutValidator) {
  return (rule?.reg as RegExp).test(val)
}
const nameLengthValidator = (val: string) => val?.length >= 2
// Promise 异步校验
function asyncValidator(val: string) {
  return new Promise((resolve) => {
    console.log('模拟异步验证中...')
    setTimeout(() => {
      console.log('验证完成')
      resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val))
    }, 1000)
  })
}
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
        v-model="formData.name" class="nut-input-text" placeholder="请输入姓名，blur 事件校验"
        type="text" @blur="customBlurValidate('name')"
      />
    </nut-form-item>
    <nut-form-item
      label="年龄" prop="age" required :rules="[
        { required: true, message: '请填写年龄' },
        { validator: customValidator, message: '必须输入数字' },
        { validator: customRulePropValidator, message: '必须输入数字', reg: /^\d+$/ },
        { regex: /^(\d{1,2}|1\d{2}|200)$/, message: '必须输入0-200区间' },
      ]"
    >
      <nut-input v-model="formData.age" class="nut-input-text" placeholder="请输入年龄，必须数字且0-200区间" type="text" />
    </nut-form-item>
    <nut-form-item
      label="联系电话" prop="tel" required :rules="[
        { required: true, message: '请填写联系电话' },
        { validator: asyncValidator, message: '电话格式不正确' },
      ]"
    >
      <nut-input v-model="formData.tel" class="nut-input-text" placeholder="请输入联系电话，异步校验电话格式" type="text" />
    </nut-form-item>
    <nut-form-item label="地址" prop="address" required :rules="[{ required: true, message: '请填写地址' }]">
      <nut-input v-model="formData.address" class="nut-input-text" placeholder="请输入地址" type="text" />
    </nut-form-item>
    <nut-cell>
      <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit">
        提交
      </nut-button>
      <nut-button size="small" @click="reset">
        重置提示状态
      </nut-button>
    </nut-cell>
  </nut-form>
</template>
