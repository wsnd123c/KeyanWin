<script setup lang="ts">
import {onMounted} from "vue";
defineProps<{label:string}>()

onMounted(
  () =>{
    // console.log(label)
  }
)
</script>

<template>
  <el-dropdown-item>{{ label }}</el-dropdown-item>
</template>

<style scoped>

</style>
