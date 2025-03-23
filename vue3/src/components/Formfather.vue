<script setup lang="ts">
import ValidateInput, { type Ruleprops } from '@/formRules/validate-input.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import api from '@/api/use.ts'
const emailRules: Ruleprops[] = [
  { type: 'required', message: '尼玛你瞎了，不填邮箱，咋注册呢' },
  { type: 'email', message: '请注意格式' },
]
const passwordRules: Ruleprops[] = [{ type: 'required', message: '不填密码，你注册你妈' }]
const nameRules: Ruleprops[] = [
  { type: 'required', message: '姓名不能为空' },
  { type: 'minLength', value: 2, message: '姓名至少需要2个字符' },
  { type: 'maxLength', value: 20, message: '姓名最多20个字符' },
  { type: 'regex', value: /^[\u4e00-\u9fa5a-zA-Z]+$/, message: '姓名只能包含中文或英文字符' },
]
let nameVal = ref()
let emailVal = ref()
let passwordVal = ref()
//获取子组件的引用
let emailInputRef = ref()
let nameSuccess = ref(false)
let emailSuccess = ref(false)
let passwordSuccess = ref(false)
const onSubmit = async () => {
  if (emailSuccess.value === true && passwordSuccess.value === true) {
    const res = await api.registerUser(emailVal.value, passwordVal.value)
    console.log(res)
    ElMessage({
      type: 'success',
      message: '成功注册',
    })
  } else {
    ElMessage.error('请重新输入')
  }
}
</script>

<template>
  <el-form @submit.prevent="onSubmit">
    <div class="input-container">
      <ValidateInput
        label="姓名"
        v-model="nameVal"
        type="name"
        :rules="nameRules"
        ref="emailInputRef"
        @validate="
          (val) => {
            nameSuccess = val
          }
        "
      >
        <template #content="{ value, error, message, 'onUpdate:value': updateValue, onBlur }">
          <el-input
            placeholder="请输入姓名"
            :model-value="value"
            @update:model-value="updateValue"
            @blur="onBlur"
            :class="{ 'is-error': error }"
            class="full-width"
          />
        </template>
      </ValidateInput>
    </div>
    <div class="input-container">
      <ValidateInput
        label="邮箱地址"
        :rules="emailRules"
        v-model="emailVal"
        type="email"
        ref="emailInputRef"
        @validate="
          (val) => {
            emailSuccess = val
          }
        "
      >
        <template #content="{ value, error, message, 'onUpdate:value': updateValue, onBlur }">
          <el-input
            placeholder="请输入邮箱地址"
            :model-value="value"
            @update:model-value="updateValue"
            @blur="onBlur"
            :class="{ 'is-error': error }"
            class="full-width"
          />
        </template>
      </ValidateInput>
    </div>
    <div class="input-container">
      <ValidateInput
        label="密码"
        v-model="passwordVal"
        type="password"
        :rules="passwordRules"
        ref="emailInputRef"
        @validate="
          (val) => {
            passwordSuccess = val
          }
        "
      >
        <template #content="{ value, error, message, 'onUpdate:value': updateValue, onBlur }">
          <el-input
            placeholder="请输入密码"
            :model-value="value"
            @update:model-value="updateValue"
            @blur="onBlur"
            :class="{ 'is-error': error }"
            class="full-width"
            type="password"
          />
        </template>
      </ValidateInput>
    </div>
    <el-button native-type="submit">注册</el-button>
  </el-form>
</template>

<style scoped>
.input-container {
  width: 100%;
  margin-bottom: 16px; /* 添加间距 */
}

.full-width {
  width: 100%;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.is-error {
  border-color: red;
}

.right-align-label .el-form-item__label {
  text-align: right;
}
</style>
