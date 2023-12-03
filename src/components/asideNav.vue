<template>
  <el-aside :width="isCollapse ? '64px':'200px'">
    <div class="buttonOut" @click="toggleCollapse">
      <el-icon :size="26" color="#3086F0" class="no-inherit"><Menu /></el-icon>
    </div>
    <el-menu
      default-active="/" router
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item item index="/">
        <el-icon><HomeFilled /></el-icon>
            <template #title>首页</template>
        </el-menu-item>
      <el-menu-item index="/panoPage">
        <el-icon><VideoCameraFilled /></el-icon>
          <template #title>VR实景展示</template>
      </el-menu-item>
      <el-menu-item index="/scanPage">
        <el-icon><LocationFilled /></el-icon>
          <template #title>AR实物识别</template>
      </el-menu-item>
      <el-menu-item index="4" disabled>
          <el-icon color="#3086F0"><setting /></el-icon>
          <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
  
<script>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

export default{
  data(){
    return{
      isCollapse:false,
    }
  },
  methods: {
    toggleCollapse(){
      this.isCollapse=!this.isCollapse;
    }
  }
}
const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  margin-top: 1rem;
  width: 10vw;
  min-height: 90vh;
}
.buttonOut{
  background-color: white;
  padding:0.25rem;
  padding-left: 1.125rem;
  height: 20px;
  line-height: 24px;
  color:white;
  letter-spacing: 0.2em;
  cursor:pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.foldButton{
  color: rgba(48, 134, 240, 1);
  //height: 20;
  //width:20;
}
</style>