<script setup lang="ts">

import { computed} from 'vue'

export  interface  ColumnProps{
  id:number;
  title:string;
  avatar:string;
  description:string;
}
const props = defineProps<{
  list: ColumnProps[];
}>();
const list = computed(() => props.list);

</script>
<template>
  <div>
    <div  class="row">
      <div v-for="column in list" :key="column.id" class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
            <p class="card-text text-left">{{ column.title }}</p>
            <a href="#" class="link-danger btn btn-outline-primary">{{column.description}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>
