<script setup lang="ts">
import { reactive } from 'vue'

export interface Ruleprops {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'regex';
  message?: string;
  value?: number | RegExp; // Add value for minLength, maxLength, and regex rules
}

const props = defineProps<{
  rules?: Ruleprops[]
  label?: string
  type?: string
}>()

const emit = defineEmits(['validate']) // 定义事件

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const inputRef = reactive({
  val: '',
  error: false,
  message: '',
})

const validateInput = () => {
  if (!props.rules) {
    return
  }
  if (props.type === 'email') {
    inputRef.error = false
    inputRef.message = ''

    for (const rule of props.rules) {
      if (rule.type === 'required' && !inputRef.val) {
        inputRef.error = true
        inputRef.message = rule.message || '该字段为必填项'
        break
      }
      if (rule.type === 'email' && !emailRegex.test(inputRef.val)) {
        inputRef.error = true
        inputRef.message = rule.message || '请输入有效的邮箱地址'
        break
      }
    }
  } else if (props.type === 'password') {
    inputRef.error = false
    inputRef.message = ''

    for (const rule of props.rules) {
      if (rule.type === 'required' && !inputRef.val) {
        inputRef.error = true
        inputRef.message = rule.message || '该字段为必填项'
        break
      }
    }

    if (inputRef.val.length < 6 || inputRef.val.length > 18) {
      inputRef.error = true
      inputRef.message = '密码长度必须大于6位且小于18位'
    }
  } else if (props.type === 'name') {
    inputRef.error = false
    inputRef.message = ''

    for (const rule of props.rules) {
      if (rule.type === 'required' && !inputRef.val) {
        inputRef.error = true
        inputRef.message = rule.message || '该字段为必填项'
        break
      }
      if (rule.type === 'minLength' && inputRef.val.length < (rule.value as number)) {
        inputRef.error = true
        inputRef.message = rule.message || `姓名至少需要${rule.value}个字符`
        break
      }
      if (rule.type === 'maxLength' && inputRef.val.length > (rule.value as number)) {
        inputRef.error = true
        inputRef.message = rule.message || `姓名最多${rule.value}个字符`
        break
      }
      if (rule.type === 'regex' && !(rule.value as RegExp).test(inputRef.val)) {
        inputRef.error = true
        inputRef.message = rule.message || '姓名只能包含中文或英文字符'
        break
      }
    }
  }

  // 触发事件，将校验结果传递给父组件
  emit('validate', !inputRef.error)
}
</script>

<template>
  <div class="validateInput">
    <el-form label-width="80px">
      <el-form-item :label="props.label">
        <slot
          name="content"
          :value="inputRef.val"
          :error="inputRef.error"
          :message="inputRef.message"
          @update:value="(val: any) => (inputRef.val = val)"
          @blur="validateInput"
        >
        </slot>
        <div class="error" v-if="inputRef.error">{{ inputRef.message }}</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
