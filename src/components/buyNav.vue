<template>
    <div>
        <h1>{{ Title }}</h1>
        <p>{{ Introduce }}</p>
        <component :is="componentTag" :belongto="markerId"></component>
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
        }
    },
    mounted(){
        if(this.comType==0){
            this.componentTag='';
        }else if(this.comType==2){
            this.componentTag='hotelPart';
            console.log(this.markerId);
        }
    }
}
</script>

<style scoped>

</style>
