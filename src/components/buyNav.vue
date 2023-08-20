<template>
    <div class="outside">
        <h1 style="text-align: center;font-size: 24px;">{{ item }}</h1>
        <div style="background-color:  rgba(23, 127, 255, 0.12);border-radius: 10px;height: 78vh;padding-left:20px;padding-right: 20px;padding-top: 10px;"> 
            <h1 style="font-size: 16px;">{{ Title }}</h1>
            <p v-if="show">{{ Introduce }}</p>
            <component :is="componentTag" :belongto="markerId"></component>
        </div>
    </div>
</template>

<script>
import hotelPart from './hotel.vue';
export default{
    components:{
        hotelPart
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
        }
    },
    mounted(){
        if(this.comType==0){
            this.componentTag='';
            show=true;
        }else if(this.comType==2){
            this.componentTag='hotelPart';
            this.item="酒店预定";
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
</style>
