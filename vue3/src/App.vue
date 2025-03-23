<script setup lang="ts">
import ColumnList, { type ColumnProps } from '@/components/ColumnList.vue'
import { onMounted, ref } from 'vue'
import formFather from '@/components/Formfather.vue'
import GlobalHeader from '@/components/GlobalHeader.vue'

onMounted(() => {})
</script>

<template>
  <div class="container">
    <GlobalHeader></GlobalHeader>
    <ColumnList></ColumnList>
    <formFather></formFather>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>
