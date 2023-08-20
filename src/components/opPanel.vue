<template>
  <div id="window">
      <pano class="vrWin" :placeURL="defaultPU" :Markers="defaultM" :dLL="defaultLL" @transfer="changePlace" @switch="switchPanel" v-if="updateDate"></pano>
      <div class="guideNav">
        <gNav :Markers="markerForShow" @transfer="getChangePlace" v-if="guideShow"></gNav>
        <bNav :Title="pointTitle" :Introduce="pointIntroduce" :comType="typeNum" :pushId="pushId" v-if="buyShow"></bNav>
        <div class="switchButton">
            <el-button @click="test()"><el-icon size="25"><Fold /></el-icon></el-button>
        </div>
      </div>
  </div>
</template>

<script>
import pano from './panoramic.vue';
import gNav from './guideNav.vue';
import bNav from './buyNav.vue';
import { Vue } from 'vue';



export default{
  components:{
    pano,
    gNav,
    bNav
  },
  data(){
    return{
      updateDate:true,
      guideShow:true,
      buyShow:false,
      changePlaceId:"",
      markerForShow:[],
      defaultPU:{},
      defaultM:[],
      defaultLL:{long:3,lat:0},
      pointTitle:"",
      pointIntroduce:"",
      typeNum:0,
      pushId:0
    }
  },
  created:function(){
    this.$data.defaultPU=this.getvrPhoto(1);
    this.$data.markerForShow=this.filMarkers();
    this.$data.defaultM=this.getDefaultM(1);
  },
  methods:{
    async getChangePlace(p){
      this.changePlaceId=p;
      var m=null;
      await this.$http.get(`/vr/marker/${p}`).then((res)=>{
        m=res.data.data;
      })
      this.defaultLL.lat=m.latitude;
      this.defaultLL.long=m.longitude;
      this.changePlace(m.belongto);
    },
    changePlace(index){
      this.defaultPU=this.getvrPhoto(index);
      this.defaultM=this.getDefaultM(index);
      this.guideShow=true;
      this.buyShow=false;
      //让vr显示窗口重加载，再次传入新的值到子组件
      this.updateDate=false;
      setTimeout(()=>{
        this.updateDate=true;
      },0)
    },
    async switchPanel(id){
      this.guideShow=false;
      let t=null;
      await this.$http.get(`/vr/marker/${id}`).then((res)=>{
        t=res.data.data;
      });
      this.pointTitle=t.tooltip;
      this.pointIntroduce=t.introduce;
      this.typeNum=t.expand;
      this.pushId=t.id;
      console.log(this.pushId);
      this.buyShow=true;
    },
    //获取id为index的场景图片和名称的记录
    async getvrPhoto(index){
      var t={};
      await this.$http.get(`/vr/vrphoto/${index}`).then((res)=>{
        t=res.data.data;
      });
      return t;
    },
    //获取能从导航栏快速跳转的景点记录
    async filMarkers(){
      var t=[];
      await this.$http.get("/vr/markers/type/gr0").then((res)=>{
        t=res.data.data;
      })
      var l=[];
      for(var i in t){
        l.push({id:t[i].id,name:t[i].tooltip,belongto:t[i].belongto,type:t[i].type});
      }
      return l;
    },
    async getDefaultM(index){
      let t=[];
      await this.$http.get(`/vr/markers/belongto/${index}`).then((res)=>{
        t=res.data.data;
      })
      return t;
    }
  }
}

</script>

<style scoped>
#window{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:90vw;
  height: 90vh;
}
.vrWin{
  widows: 65%;
  height: 85vh;
  border-radius: 25px;
  padding: 20px;
  background: #E7F2FFFF;
}
.guideNav{
  width:35%;
  height: 85vh;
  margin-left: 10px;
  border-radius: 25px;
  padding: 20px;
  background: #E7F2FFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: scroll;
}
.switchButton{
    display: flex;
    flex-direction: row-reverse;
}

</style>
