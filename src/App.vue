<template>
  <div class="app">
    <router-view></router-view>
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
.app{
  padding:15px 60px
}

#container{
  height: 100%;
}
</style>

