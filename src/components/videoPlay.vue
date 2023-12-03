<template>
  <div class="videoPlayPage">
    <div class="videoPlay">
      <video id="myVideo" width="320" height="240" controls>
        <source :src="url" type="video/mp4">
      </video>

    </div>
    <h1 class="title">
      视频列表
    </h1>
    <div class="menu">
      <el-row>
        <el-button type="text" @click="setUrl(0)">竹编1.1一挑一编法</el-button>
      </el-row>
      <el-row>
        <el-button type="text" @click="setUrl(1)">竹编1.2斜纹编法</el-button>
      </el-row>
      <el-row>
        <el-button type="text" @click="setUrl(2)">竹编1.3六角孔编法</el-button>
      </el-row>
      <el-row>
        <el-button type="text" @click="setUrl(3)">竹编1.3三角孔编法</el-button>
      </el-row>
      <el-row>
        <el-button type="text" @click="setUrl(4)">竹编1.4圆孔编织法</el-button>
      </el-row>

<!--      <el-menu-->
<!--        style="background: rgba(255,255,255,0)"-->
<!--      >-->
<!--        <el-sub-menu>-->
<!--          <template #title>-->
<!--            <el-icon><Camera /></el-icon>-->
<!--            <span>视频列表</span>-->
<!--          </template>-->
<!--          <el-menu-item @click="" class="sub-menu">视频1</el-menu-item>-->
<!--          <el-menu-item @click="" class="sub-menu">视频2</el-menu-item>-->
<!--          <el-menu-item @click="" class="sub-menu">视频3</el-menu-item>-->
<!--          <el-menu-item @click="" class="sub-menu">视频4</el-menu-item>-->
<!--          <el-menu-item @click="" class="sub-menu">视频5</el-menu-item>-->
<!--        </el-sub-menu>-->
<!--      </el-menu>-->
    </div>
<!--    <div style="bottom: 2em;position: absolute;right: 6em"><el-row>-->
<!--      <el-col :offset="0" :span="12">-->
<!--        <el-button @click="setUrl(0)" class="button" type="text"><img :src="buttonImg[0]" alt="1" class="button"></el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="12">-->
<!--        <el-button @click="setUrl(1)" class="button" type="text"><img :src="buttonImg[1]" alt=""  class="button"></el-button>-->
<!--      </el-col>-->
<!--    </el-row></div>-->
  </div>
</template>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "videoPlay",
  data(){
    return {
      url: "",
      arr:[
          "http://localhost:8094/common/image/竹编1.1一挑一编法.mp4",
          "http://localhost:8094/common/image/竹编1.2斜纹编法.mp4",
          "http://localhost:8094/common/image/竹编1.3六角孔编法.mp4",
          "http://localhost:8094/common/image/竹编1.3三角孔编法.mp4",
          "http://localhost:8094/common/image/竹编1.4圆孔编织法.mp4",
      ],
      buttonImg:[
          require("@/assets/非遗/视频按钮（点.png"),
          require("@/assets/非遗/视频按钮.png")
      ]
    }
  },
  mounted() {
      this.url=this.arr[0];
      document.getElementById("myVideo").load();
  },
  methods:{
      setUrl(index){
        this.url = this.arr[index];
        document.getElementById("myVideo").load();
        // let temp = this.buttonImg[0];
        // this.buttonImg[0] = this.buttonImg[1];
        // this.buttonImg[1] = temp;
      }
  }
})
</script>

<style scoped>
.videoPlay{
    text-align: center;
}
.button{
    height: 5vh;
    width: 12vh;
    margin-bottom: 1em;
}
.videoPlayPage{
    /*background-image: url("@/assets/非遗/播放页.png");*/
    //background-size: 100% 100%;
    //height: 100vh;
}
.menu *{
  color: #7b562c;
  margin: 0.1em 1.5em;
}
.el-button:hover, .el-button:focus{
  color: #977147!important;
}
.title{
  margin: 0.7em 1em;
  color: #7b562c;
}

</style>