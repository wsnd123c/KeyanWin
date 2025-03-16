<script setup lang="ts" >
import { ArrowDown } from "@element-plus/icons-vue";
import Dropdown_item from "@/components/Dropdown/Dropdown_item.vue";
import api from "@/api/use.ts";
import {ref} from "vue"; // ✅ 需要手动导入图标
const  props =defineProps<{title:string}>()
const lableList =ref()
const getLables =async () =>{
  const res = await api.getLables()
  lableList.value =res
  console.log(res)
}
</script>

<template>
  <el-dropdown trigger="click" @visible-change="getLables">
    <el-button type="primary">
      {{props.title}}
      <el-icon class="el-icon--right">
      <ArrowDown /> <!-- ✅ 这里要使用大写的 ArrowDown 组件 -->
    </el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <Dropdown_item v-for="(item,index) in lableList" :key="index" :label="item.item_lable"></Dropdown_item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>

</style>
