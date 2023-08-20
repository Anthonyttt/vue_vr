<template>
    <div>{{ this.d }}</div>
</template>

<script>

export default{
    
    data(){
        return{
            d:null,
            list:[]
        }
    },
    created:function(){
        this.d=this.getP(1);
        
    },
    mounted(){
        // console.log(this.d);
    },
    methods:{
        t(index){
            this.$http.get(`vr/vrphoto/${index}`).then((res)=>{
                // console.log(typeof(res.data.data.url));
                return res.data.data.url;
            })
        },
        async getP(index){
            var up="";
            await this.$http.get(`vr/vrphoto/${index}`).then((res)=>{
                up=res.data.data.url;
            })
            console.log(up);
            await this.$http.get(`common/image/${up}`).then((res)=>{
                return res.data;
            })
        }
    }
}
</script>
