<template>
  <div class="app">
    <el-container class="boxOut">
      <el-container id="container">
        <el-aside width="270">
          <asideNav></asideNav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import showWin from './components/opPanel.vue';
import asideNav from './components/asideNav.vue';

export default{
  name:"App",
  components:{
    showWin,
    asideNav,
  }
}
</script>

<style scoped>
html,body{
  height:100%;
  margin:0;
  border: 0;
  padding:0;
}
el-container{
  height: 100vh;
  border:1px solid #eee;
  margin:0;
  padding:0;

}
el-aside{
  width:200px;
}

#container{
  height: 100%;
}
</style>

