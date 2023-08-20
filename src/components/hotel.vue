<template>
    <el-config-provider :locale="locale">
        <div style="display: flex;flex-direction: row;height: 20px;">
            <el-icon :size="16" color="rgba(23, 127, 255, 1)" style="height:16px"><LocationFilled /></el-icon>
            <p style="margin-left:8px;font-size: 12px;color:rgba(69, 88, 115, 1);line-height: 16px;">浙江，杭州，余杭区，黄湖镇，青山村石扶梯水库旁莫干山南坡</p>
        </div>
        <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="入住时间"
        end-placeholder="退房时间"
        style="margin-top: 5%;margin-bottom: 2%;"
        >
        </el-date-picker>
    </el-config-provider>
    <div v-for="r in roomType" class="roomTypeLabel">
        <el-row>
            <el-col :span="8"><el-image :src="r.url" :fit="contain" style="border-radius: 5px;"></el-image></el-col>
            <el-col :span="10" :offset="1">
                <div style="height:100%;display: flex;flex-direction: column;justify-content: space-between;">
                    <text class="roomTitle">{{ r.name }}</text>
                    <text class="roomBed">{{ r.bed }}</text>
                    <text class="roomIn">{{ r.tag }}</text>
                </div>
            </el-col>
            <el-col :span="2" :offset="2">
                <div style="height: 100%;display: flex;flex-direction: column;align-items: center;justify-content: space-between;">
                    <div class="roomPrice">{{ "￥"+r.price }}</div>
                    <div class="dLog">订</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { ref } from 'vue';
// import func from 'vue-editor-bridge';


var tDate=new Date();
const startDate=new Date();
const endDate=new Date(tDate.setDate(tDate.getDate()+1));
const url="http://localhost:8094/common/image/";



export default{
    components:{
        [ElConfigProvider.name]:ElConfigProvider,
    },
    props:{
        belongto:Number,
    },
    data(){
        return{
            locale:zhCn,
            value1:[startDate,endDate],
            roomType:[],
        }
    },
    created:async function(){
        this.roomType=await this.getRoom();
        console.log(this.roomType);
        for(var i in this.roomType){
            this.roomType[i].url=url+this.roomType[i].url;
        }
    },
    methods:{
        async getRoom(){
            let t=null;
            console.log(this.belongto);
            await this.$http.get(`/vr/roomtypes/belongto/${this.belongto}`).then((res)=>{
                t=res.data.data;
            });
            return t;
        }
    }
}
</script>

<style scoped>
.title{
    font-size: 16px;
    font-weight: 700;
    width: 70px;
}
.line{
    width: 37%;
    height: 0px;
    opacity: 1;
    background: rgba(204, 204, 204, 1);

    border: 1px solid rgba(166, 166, 166, 1);
}
.roomTitle{
    font-size: 14px;
    font-weight: 700;
    
}
.roomBed{
    font-size: 10px;
    font-weight: 400;
}
.roomIn{
    font-size: 10px;
}
.roomPrice{
    padding-top: 30%;
    font-weight: 700;
    color: rgba(23, 127, 255, 1);

}
.dLog{
    width: 35px;
    height: 35px;
    font-size: 16px;
    font-weight: 600;
    color:white;
    background-color: rgba(23, 127, 255, 1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.roomTypeLabel{
    margin-top: 2%;
    margin-bottom: 2%;
    background-color: white;
    padding:3%;
    height: 80px;
    border-radius: 10px;
    box-shadow: 3px 5px 7px  rgba(0, 0, 0, 0.05);
}

</style>
