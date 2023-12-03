<script>
import {defineComponent} from 'vue'
import listItem from "@/components/listItem.vue";

export default defineComponent({
  components:{
    listItem,
  },
  name: "list",
  data(){
    return {
      listVal:[
        {
          title: "竹编灯罩",
          price: 80,
          url: "http://localhost:8094/common/image/Map.jpg"
        },
        {
          title: "竹编灯罩",
          price: 80,
          url: "http://localhost:8094/common/image/Map.jpg"
        },
        {
          title: "竹编灯罩",
          price: 80,
          url: "http://localhost:8094/common/image/Map.jpg"
        },
        {
          title: "竹编灯罩",
          price: 80,
          url: "http://localhost:8094/common/image/Map.jpg"
        },
        {
          title: "竹编灯罩",
          price: 80,
          url: "http://localhost:8094/common/image/Map.jpg"
        },
        {
          title: "竹编灯罩",
          price: 80,
          url: "http://localhost:8094/common/image/Map.jpg"
        },
      ]
    }
  }
})
</script>

<template>
  <div class="list">
    <el-row>
      <el-col :span="11" :offset="1" v-for="item in listVal">
        <listItem :title="item.title" :price="item.price" :url="item.url" style="margin: 1em 0" class="item"></listItem>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.item:hover{
  cursor: pointer;
}
</style>