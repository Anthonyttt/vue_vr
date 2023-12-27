<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "listItem",
  props:{
    title: String,
    price: Number,
    url: String,
  },
  data(){
    return {
      title: "",
      price: 0,
      url: "",
    }
  },
  created: async function() {
    // this.title = await this.$props.title;

  },
  mounted() {
    this.title = this.$props.title;
    this.price = this.$props.price;
    this.url = (this.$props.url);

  },
  methods:{

  }
})
</script>

<template>
  <div class="listItem">
    <div class="pre">
      <img :src="url" alt="1" class="pre">
    </div>
    <div class="back">
      <div class="space" style="height: 0.5em"/>
      <h3 class="title">
        {{title}}
      </h3>
      <div class="price">
        ¥ {{price}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.pre{
  border-radius: 5px 5px 0 0;
  height: 6em;
  width: 10em;
  //background-color: aqua;
}
.back{
  background-color: #7b562c;
  border-radius: 0 0 5px 5px;
  width: 10em;
  height: 4em;
  margin: -0em 0;
}

.price{
  margin: 0 0.5em;
}
.title{
  margin: 0 0.5em;
}
.price, .title{
  color: white;
  //margin: auto 1em;

}
</style>