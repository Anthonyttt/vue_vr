<template>
    <div class="outside">
        <div style="background-color:  rgba(23, 127, 255, 0.12);border-radius: 10px;height: 85vh;padding-left:20px;padding-right: 20px;padding-top: 10px;"> 
            <div class="title">
                <h1 style="font-size: 16px;">{{ Title }}</h1>
                <el-button @click="back()" color="#ffffff" round>返回</el-button>
            </div>
            <p v-if="show">{{ Introduce }}</p>
            <component :is="componentTag" :belongto="markerId" @visitHome="visitHome"></component>
        </div>
    </div>
</template>

<script>
import hotelPart from './hotel.vue';
import building from './building.vue';
export default{
    components:{
        hotelPart,
        building
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
            this.show=true;
        }else if(this.comType==2){
            this.componentTag='hotelPart';
            this.item="酒店预定";
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
</style>
