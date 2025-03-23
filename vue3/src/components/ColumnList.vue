<script setup lang="ts">
import api from '@/api/use.ts'
import { computed, onMounted, reactive, ref } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  avatar: string
  description: string
}
const list = reactive<ColumnProps[]>([]) // 明确类型为 ColumnProps[]
const getCard = async () => {
  const res = await api.getCards()
  //如果直接赋值，会破败坏reactive的响应式
  list.splice(0, list.length, ...res) // 使用 splice 更新数组内容
  console.log(list)
}
onMounted(() => {
  getCard()
})
</script>
<template>
  <div>
    <div class="row">
      <div v-for="column in list" :key="column.id" class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <img
              :src="column.avatar"
              :alt="column.title"
              class="rounded-circle border border-light w-25 my-3"
            />
            <p class="card-text text-left">{{ column.title }}</p>
            <a href="#" class="link-danger btn btn-outline-primary">{{ column.description }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
