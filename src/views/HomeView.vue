<template>
    <div class="head">
        <div style="display: flex;flex-direction: row;align-items: center;">
            <img class="logo" src="../assets/logo/logo.png">
            <text class="title">恣游</text>
        </div>
        <div style="display: flex;flex-direction: row;align-items: center;">
            <input type="search" class="searchBox" placeholder="请输入..."/>
            <button class="searchButton"><el-icon color="#ffffff" size="25"><Search /></el-icon></button>
        </div>
        <el-button class="personalButton" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;">
            <el-icon color="#0D61FD" size="24"><Avatar /></el-icon>
            <text class="pleaseLogin">请登入</text>
        </el-button>
    </div>
    <div class="body">
        <el-carousel height="340px" type="card">
            <el-carousel-item>
                <img src="../assets/banner/001.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/banner/002.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/banner/003.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/banner/004.jpg">
            </el-carousel-item>
        </el-carousel>
        <div></div>
        <div class="main">
            <div class="line">
                <div class="outbox">
                    <el-button class="label" color="#0CAF90" @click="gotoVR">
                        <el-icon size="84" color="#ffffff"><View /></el-icon>
                        <text class="labelText">VR浏览</text>
                    </el-button>
                </div>
                <div class="outbox">
                    <el-button class="label" color="#FFC300">
                        <el-icon size="84" color="#ffffff"><OfficeBuilding /></el-icon>
                        <text class="labelText">酒店民宿</text>
                    </el-button>
                </div>
                <div class="outbox">
                    <el-button class="label" color="#9838FF">
                        <el-icon size="84" color="#ffffff"><ShoppingCart /></el-icon>
                        <text class="labelText">特产售卖</text>
                    </el-button>
                </div>
                <div class="outbox">
                    <el-button class="label" color="#e4e56b">
                        <el-icon size="84" color="#ffffff"><MagicStick /></el-icon>
                        <text class="labelText">娱乐活动</text>
                    </el-button>
                </div>
            </div>
            <div class="line">
                <div class="outbox">
                    <el-button class="label" color="#93B0E6" @click="gotoAR">
                        <el-icon size="84" color="#ffffff"><FullScreen /></el-icon>
                        <text class="labelText">AR识别</text>
                    </el-button>
                </div>
                <div class="outbox">
                    <el-button class="label" color="#3895FF">
                        <el-icon size="84" color="#ffffff"><Paperclip /></el-icon>
                        <text class="labelText">文创产品</text>
                    </el-button>
                </div>
                <div class="outbox">
                    <el-button class="label" color="#F33837">
                        <el-icon size="84" color="#ffffff"><Bicycle /></el-icon>
                        <text class="labelText">交通查询</text>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div style="display: flex;flex-direction: column;width: 20%;">
            <div style="display: flex;flex-direction: row;align-items: center;padding: 20px;">
                <img class="logo" src="../assets/logo/logo.png">
                <text class="title">恣游</text>
            </div>
            <text class="slogan">一个致力于走遍世界的旅游出行</text>
            <text class="slogan">规划网站</text>
        </div>
        <div style="display: flex;flex-direction: row;width: 80%;justify-content: space-around;">
            <div style="display: flex;flex-direction: column;align-items: center;">
                <div class="littleTitle">详情</div>
                <el-button text class="bottomButton">关于我们</el-button>
                <el-button text class="bottomButton">分类</el-button>
                <el-button text class="bottomButton">博客</el-button>
            </div>
            <div style="display: flex;flex-direction: column;align-items: center;">
                <div class="littleTitle">合作</div>
                <el-button text class="bottomButton">业务联系</el-button>
            </div>
            <div style="display: flex;flex-direction: column;align-items: center;">
                <div class="littleTitle">信息</div>
                <el-button text class="bottomButton">求助中心</el-button>
                <el-button text class="bottomButton">网络连接</el-button>
                <el-button text class="bottomButton">联系我们</el-button>
            </div>
        </div>
    </div>
</template>

<script>


export default{
    methods:{
        gotoVR(){
            this.$router.push('/panoPage');
        },
        gotoAR(){
            this.$router.push('/scanPage');
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
    justify-content: space-between;
    padding: 5px;
}
.logo{
    height: 52px;
    width: 52px;
}
.title{
    color:rgba(140, 183, 245, 1);
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 26px;
    font-weight: 900;
    line-height: 50px;
    width: 60px;
    text-align: center;
}
.searchBox{
    margin-left: 250px;
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
.personalButton{
    width: 132px;
    height: 50px;
    box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.25);
    border:0px;
    border-radius: 20px;
}
.pleaseLogin{
    margin-left: 5px;
    line-height: 22.99px;
    color: rgba(139, 150, 165, 1);
    font-size: 16px;
    font-weight: 600;
    font-family:Georgia, 'Times New Roman', Times, serif;
}
.main{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.line{
    display: flex;
    flex-direction: column;
    align-content: flex-start;
}
.label{
    width: 640px;
    height: 159px;
    border-radius: 16px;
}
.labelText{
    margin-left: 100px;
    line-height: 34.49px;
    color: white;
    font-size: 24px;
    font-weight: 600;
    font-family:Georgia, 'Times New Roman', Times, serif;
}
.outbox{
    height: 180px;
    padding:10px 0px;
}
.bottom{
    height: 180;
    width: 100%;
    padding:0px 70px;
    display: flex;
    flex-direction: row;
    align-content: space-between;
}
.slogan{
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: rgba(80, 80, 80, 1);
    font-family:Georgia, 'Times New Roman', Times, serif;
}
.bottomButton{
    height: 30px;
    width: 100px;
    border: 0px;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 24px;
    color: rgba(139, 150, 165, 1);
    font-family:Georgia, 'Times New Roman', Times, serif;
}
.littleTitle{
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(28, 28, 28, 1);
    font-family:Georgia, 'Times New Roman', Times, serif;
}


</style>
