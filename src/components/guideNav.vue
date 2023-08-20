<template>
    <div class="outbox">
        <el-aside>
            <h5 class="title">点位总览</h5>
            <el-menu
            class="el-menu"
            background-color="#E7F2FFFF"
            unique-opened
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><Picture /></el-icon>
                        <span>风景点</span>
                    </template>
                    <el-menu-item-group id="viewGroup">
                        <el-menu-item v-for="v in view" @click="changePlace(v.id)">{{v.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><Camera /></el-icon>
                        <span>参观</span>
                    </template>
                    <el-menu-item-group id="visitGroup">
                        <el-menu-item v-for="v in visit" @click="changePlace(v.id)">{{v.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon><MagicStick /></el-icon>
                        <span>活动</span>
                    </template>
                    <el-menu-item-group id="activityGroup">
                        <el-menu-item v-for="a in activity" @click="changePlace(a.id)">{{a.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="4">
                    <template #title>
                        <el-icon><Food /></el-icon>
                        <span>餐饮</span>
                    </template>
                    <el-menu-item-group id="foodGroup">
                        <el-menu-item v-for="f in food" @click="changePlace(f.id)">{{f.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="5">
                    <template #title>
                        <el-icon><OfficeBuilding /></el-icon>
                        <span>住宿</span>
                    </template>
                    <el-menu-item-group id="liveGroup">
                        <el-menu-item v-for="l in live" @click="changePlace(l.id)">{{l.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="6">
                    <template #title>
                        <el-icon><Goods /></el-icon>
                        <span>特色产品</span>
                    </template>
                    <el-menu-item-group id="goodGroup">
                        <el-menu-item v-for="g in good" @click="changePlace(g.id)">{{g.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="7">
                    <template #title>
                        <el-icon><Warning /></el-icon>
                        <span>服务</span>
                    </template>
                    <el-menu-item-group id="serveGroup">
                        <el-menu-item v-for="s in serve" @click="changePlace(s.id)">{{s.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        
    </div>
</template>

<script>

export default{
    // type类型：
    // view:1
    // visit:2
    // activity:3
    // food:4
    // live:5
    // good:6
    // serve:7
    props:{
        Markers:Promise
    },
    data(){
        return{
            view:[],
            visit:[],
            activity:[],
            food:[],
            live:[],
            good:[],
            serve:[],
        }
    },
    created:async function(){
        let m=await this.Markers;
        this.view=this.showList(m,1);
        this.visit=this.showList(m,2);
        this.activity=this.showList(m,3);
        this.food=this.showList(m,4);
        this.live=this.showList(m,5);
        this.good=this.showList(m,6);
        this.serve=this.showList(m,7);
    },
    mounted(){

    },
    methods: {
        changePlace(id){
            this.$emit("transfer",id);
        },
        showList(mList,type){
            var list=[];
            for(var i in mList){
                let ml=mList[i];
                if(ml.type==type){
                    list.push({id:ml.id,name:ml.name,belongto:ml.belongto});
                }
            }
            console.log();
            return list;
        }
    }
}
</script>

<style scoped>
.title{
    padding-left: 20px;
    font-size: 20px;
}
.outbox{
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow:auto;
}
.el-menu{
    
}

</style>