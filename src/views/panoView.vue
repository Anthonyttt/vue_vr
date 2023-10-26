<template>
    <div class="head">
        <img class="logo" src="../assets/logo/logo.png" @click="back">
        <text class="title" @click="back">恣游</text>
        <div style="display: flex;flex-direction: column;margin-left: 250px;">
            <!-- <el-autocomplete
                v-model="nameSearch"
                :fetch-suggestions="querySearch"
                :trigger-on-focus="false"   
                clearable
                placeholder="请输入..."
                class="searchBox"
                @select="handleSelect"
            /> -->
            <input type="text" class="searchBox" placeholder="请输入...">
        </div>
        <button class="searchButton"><el-icon color="#ffffff" size="25"><Search /></el-icon></button>
    </div>
    <pano></pano>
</template>

<script>
import pano from '../components/opPanel.vue';

export default{
    components:{
        pano
    },
    data(){
        return{
            nameList:[],
            nameSearch:"",
        }
    },
    created:async function(){
        this.nameList=await this.getName();
    },
    mounted(){
        
    },
    methods:{
        back(){
            this.$router.push('/');
        },
        querySearch(queryString,cb){
            var list=this.nameList;
            let results=queryString ? list.map(item=>item.name).filter(this.createFilter(queryString)):list.map(item=>item.name);
            console.log(results);
            cb(results);
        },
        createFilter(queryString) {
            return function(item) {
                const lowercaseItem = item.toLowerCase();
                const lowercaseQuery = queryString.toLowerCase();
                return lowercaseItem.includes(lowercaseQuery);
            };
        },
        handleSelect(item){
            console.log(item);
        },
        async getName(){
        var t=[];
        await this.$http.get(`/vr/agproducts/name`).then((res)=>{
            t.push(res.data.data);
        })
        await this.$http.get(`/vr/concerts/name`).then((res)=>{
            t.push(res.data.data);
        })
        await this.$http.get(`/vr/courses/name`).then((res)=>{
            t.push(res.data.data);
        })
        await this.$http.get(`/vr/diys/name`).then((res)=>{
            t.push(res.data.data);
        })
        await this.$http.get(`/vr/drinks/name`).then((res)=>{
            t.push(res.data.data);
        })
        await this.$http.get(`/vr/menus/name`).then((res)=>{
            t.push(res.data.data);
        })
        await this.$http.get(`/vr/roomtypes/name`).then((res)=>{
            t.push(res.data.data);
        })
        let out=[];
        for(var i in t){
            for(var j in t[i])
            out.push({name:t[i][j].name,belongto:t[i][j].belongto});
        }
        return out;
        }
    }
}
</script>
<style scoped>
.head{
    margin-top: 5px;
    margin-bottom: 5px;
    height: 6vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
}
.logo{
    height: 52px;
    width: 52px;
    cursor: pointer;
}
.title{
    color:rgba(140, 183, 245, 1);
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 26px;
    font-weight: 900;
    line-height: 50px;
    width: 60px;
    text-align: center;
    cursor: pointer;
}
.searchBox{
    width: 500px;
    height: 50px;
    border-radius: 16px 0px 0px 16px;
    background:  rgba(255, 255, 255, 1);
    box-shadow: 3px 3px 7px  rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(13, 97, 253, 1);
    text-indent: 10px;
    font-size: 16px;
}
.searchButton{
    height: 51px;
    width: 100px;
    border-radius: 0px 15px 15px 0px;
    background: rgba(13, 110, 253, 1);
    box-shadow: 3px 3px 7px  rgba(0, 0, 0, 0.25);
    border: 0px;
}
</style>