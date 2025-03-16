<script setup lang="ts">
import {nextTick, onMounted, ref} from "vue";
import api from "@/api/use.ts";
import Dropdown from "@/components/Dropdown/Dropdown.vue";

export interface UseProps {
  login?: string;
  name?: string;
  id?: number;
}

// const props = defineProps<{
//   user?: UseProps; // ✅ 允许 user 为空，避免 TypeError
// }>();
const user = ref<UseProps | null>(null); // ✅ 确保初始值是 `null` 而不是 `undefined`

const fetchUser = async () => {
  try {
    const res = await api.getUsers();
    console.log("API 返回数据:", res); // 调试日志
    if (Array.isArray(res) && res.length > 0 && res[0]) {
      user.value = res[0];
      console.log("User List Updated:", user.value);
    } else {
      console.warn("API 返回的数据不是预期的用户列表:", res);
    }
  } catch (error) {
    console.error("获取用户失败:", error);
  }
};

onMounted(
  () =>{
    fetchUser()
  }
)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand" href="/">广灵专栏</a>

    <ul v-if="user?.login ==='false'" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="" class="btn btn-outline-dark" my-2>登录</a>
        <a href="" class="btn btn-outline-dark" my-2>注册</a>
        <div>312312</div>
      </li>
    </ul>

    <ul v-else-if="user" class="list-inline mb-0">
      <li class="list-inline-item">
<!--        <a href="" class="btn btn-outline-dark " my-2>欢迎：{{user.name }}</a>-->
        <Dropdown :title="`你好`"></Dropdown>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
</style>
