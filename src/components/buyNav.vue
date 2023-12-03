<template>
    <div class="outside">
        <div
            style="background-size: 100% 100%;
              border-radius: 10px;
              height: 85vh;
              padding-left:20px;
              padding-right: 20px;
              padding-top: 10px;"
            v-show="true"
            class="buy"
        >
            <div style="height: 10vh"></div>
          <el-button v-if="!backShow" @click="back()" type="text" round>
            <img src="@/assets/非遗/播放.png" style="height: 2vh;width: 2vh;">
            <div style="width: 0.7em;"></div>
            <div style="color: #7b562c;">返回</div>
          </el-button>
            <el-row class="title" style="width: 100%" v-if="show">
              <el-col :offset="2" :span="12">
                <h1 style="font-size: 36px;font-family:STHeiti,serif;color: #7b562c">{{ Title }}</h1>
              </el-col>
            </el-row>
            <p v-if="show" style="width: 80%;margin-left: 2em;color: #7b562c">{{ Introduce }}</p>
            <component :is="componentTag" :belongto="markerId" @visitHome="visitHome" @click="showProduct"></component>

          <el-button v-if="backShow" @click="back()" type="text" round style="bottom: 5em; position: absolute">
            <img src="@/assets/非遗/播放.png" style="height: 2vh;width: 2vh;">
            <div style="width: 0.7em;"></div>
            <div style="color: #7b562c;">返回</div>
          </el-button>
            <div style="bottom: 4em;right:7em; position: absolute">
              <el-button v-if="playVideo" @click="buy" type="text" class="button">
<!--                <div>购买物品</div>-->
                <img src="@/assets/非遗/商品按钮.png" class="button" alt="">
              </el-button>
              <el-button v-if="playVideo" @click="showVideo" type="text" class="button">
<!--                <div>播放视频</div>-->
                <img src="@/assets/非遗/视频按钮.png" class="button" alt="">
              </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import hotelPart from './hotel.vue';
import building from './building.vue';
import videoPlay from "@/components/videoPlay.vue";
import buy from './buy.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import list from "@/components/list.vue";
export default{
    components:{
        hotelPart,
        building,
        videoPlay,
        buy,
        list,
    },
    props:{
        Title:String,
        Introduce:String,
        comType:Number,
        pushId:Number,
    },
    data(){
        return{
            componentTag:'',
            markerId:this.pushId,
            item:"风景介绍",
            show:false,
            playVideo:false,
            backShow:false,
        }
    },
    mounted(){console.log(this.comType);
        if(this.comType==0){
            this.componentTag='';
            this.show=true;
        }else if(this.comType==2){
            this.componentTag='hotelPart';
            this.item="酒店预定";
        }else if(this.comType == 100){
          this.componentTag = '';
          // this.item="施工中...";
          this.show=true;
          this.playVideo=true;
        }else{
            this.componentTag='building';
            this.item="施工中...";
        }

    },
    methods:{
        back(){
            this.$emit("isChange",true);
        },
        visitHome(index){
            console.log(`first:${index}`)
            this.$emit('visitHome',index);
        },
        showVideo(){
            this.playVideo=false;
            this.show=false;
            this.componentTag='videoPlay';
        },
        buy(){
            this.playVideo=false;
            this.show=false;
            this.componentTag="list";
            this.backShow=true;
        },
        showProduct(){
          if(this.componentTag==="list")
            this.componentTag="buy";
        }
    }
}
</script>

<style scoped>
.outside{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.buy{
    background-image: url("@/assets/非遗/文本d框.png");
    background-size: 120% 120%;
    width: 100%;
    height: 100%;
}
.button{
    color: #7b562c;
  //text-align: center;
  //height: 2em;
  //width: 6em;
  border: 2px solid #7b562c;
  border-radius: 5px;
  height: 5vh;
  width: 15vh;
}
.el-button--text:not(.is-disabled):focus, .el-button--text:not(.is-disabled):hover {

  color: #7b562c;
  border: 2px solid #7b562c;
  border-radius: 5px;
}
</style>
