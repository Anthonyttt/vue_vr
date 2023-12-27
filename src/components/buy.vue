<template>
  <div class="buy">

  </div>
  <div class="product">
    <el-row>
      <el-col :span="12">
        <el-row>
          <div class="title">
            竹编灯罩
          </div>
        </el-row>
        <el-row>
          <div>
            发货地：浙江 杭州
          </div>
        </el-row>
        <el-row>
          <div>
            预计送达时间：3天
          </div>
        </el-row>
      </el-col>
      <el-col :offset="2" :span="10">
        <h1 class="price">
          ¥80
        </h1>
      </el-col>
    </el-row>
  </div>
  <div style="bottom: 4em;right:7em; position: absolute">
    <el-button @click="buy" type="text" class="button">
      <div style="font-size: 24px">立即购买</div>
    </el-button>
  </div>
</template>


<script>
import {defineComponent} from 'vue'
import {ElMessage, ElMessageBox} from "element-plus";

export default defineComponent({
  name: "buy",
  data(){
    return {

    }
  },
  methods:{
    buy(){
      ElMessageBox.confirm(
          '竹编的价格为¥80\n确定要购买吗?',
          '',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }
      )
          .then(() => {
            ElMessage({
              type: 'success',
              message: '购买成功',
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '购买取消',
            })
          })
    }
  }
})
</script>

<style scoped>
.buy{
  font-size: 36px;
  color: #7b562c;
  //background-color: white;
  background-image: url("@/assets/非遗/竹编灯罩.jpg");
  background-size: 100% 100%;
  height: 60%;
  width: 100%;
  margin: -0.7em 0;
  border-radius: 10px 10px 0 0;
}
.product{
  margin: 4em 1em;

  color: #7b562c;
}
.product .title{
  font-size: 36px;
}
.product .price{
  font-size: 64px;
  margin: 0 0;
}
.button{
  color: #7b562c;
  text-align: center;
  height: 4em;
  width: 12em;
  border: 2px solid #7b562c;
  border-radius: 5px;
}
.el-button--text:not(.is-disabled):focus, .el-button--text:not(.is-disabled):hover {

  color: #7b562c;
  border: 2px solid #7b562c;
  border-radius: 5px;
}
</style>