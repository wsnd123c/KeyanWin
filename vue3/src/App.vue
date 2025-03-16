<script setup lang="ts">
import ColumnList, { type ColumnProps } from '@/components/ColumnList.vue'
import  icon_audit from '@/components/icons/icon-audit.png'
import  icon_agreement from '@/components/icons/icon-agreement.png'
import api from "@/api/use.ts";
import {onMounted, ref, watchEffect} from "vue";
import type {UseProps} from "@/components/GlobalHeader.vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
const testList: ColumnProps[] = [
  {
    id: 1,
    title: "前端开发",
    avatar: icon_audit , // 占位图
    description: "这是一个前端开发的专栏",
  },
  {
    id: 2,
    title: "后端开发",
    avatar: icon_agreement,
    description: "这是一个后端开发的专栏",
  },
  {
    id: 2,
    title: "后端开发",
    avatar: icon_agreement,
    description: "这是一个后端开发的专栏",
  },
  {
    id: 2,
    title: "后端开发",
    avatar: icon_agreement,
    description: "这是一个后端开发的专栏",
  },
];

onMounted(
  () =>{
    // fetchUser()
  }
)
</script>

<template>
  <div class="container">
    <GlobalHeader ></GlobalHeader>
    <ColumnList :list =testList></ColumnList>


  </div>

</template>

<style scoped>
.container{
  width: 100%;
}
</style>
