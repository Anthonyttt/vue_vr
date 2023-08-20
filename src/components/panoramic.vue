<template>
    <div id="viewer"></div>
</template>

<script>
import {toRaw} from "@vue/reactivity";
import {Viewer} from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import {MarkersPlugin} from 'photo-sphere-viewer/dist/plugins/markers';
import 'photo-sphere-viewer/dist/plugins/markers.css';
import * as THREE from 'three';
// import { onMounted } from 'vue';


const fillColor="rgba(142,151,155,0.75)";
const strokeColor="rgba(255,255,255,0.75)";
const strokeWidth="3px";
const pointSize=15;
const url="http://localhost:8094/common/image/";


var viewer=null;



export default{
    props:{
        placeURL:Object,
        Markers:Promise,
        dLL:Object
    },
    data(){
        return{
            markersPlugin:null,
            viewer:null,
            selectMarkers:[],
            selectedImg:"",
            placeName:"",
            markers:[],
        }
    },
    created:async function(){
        let t=await this.placeURL;
        let m=await this.Markers;
        this.markers=this.getMarkers(m);
        this.placeName=t.name;
        this.selectedImg=url+t.url;
        this.init();
    },
    mounted(){
        // this.init();
    },
    methods:{
        init(){
            if(viewer) try{
                        viewer.destroy();
                    }catch(err){
                        const old=document.querySelector("#viewer");
                        old.removeChild(old.childNodes[0]);
                    }
            viewer=new Viewer({
                container:document.querySelector('#viewer'),
                panorama:this.selectedImg,
                loadingTxt:"加载中...",
                caption:this.placeName,
                defaultZoomLvl:0,
                // autorotateLat:0,
                // autorotateSpeed:0.209,
                defaultLong:this.dLL.long,
                defaultLat:this.dLL.lat,
                // autorotateDelay:1,
                size:{
                    width:"100vw",
                    height:"100vh"
                },
                plugins:[
                    [
                        MarkersPlugin,{
                            markers:this.markers
                        },
                    ],
                ],
            });
            this.markersPlugin=viewer.getPlugin(MarkersPlugin);
            viewer.once("ready",()=>{  

            });
            this.markersPlugin.on("select-marker",(e,marker)=>{
                let index=marker.config.type;
                if(index!=0){
                    this.markersPlugin.hideMarker(marker.id);
                    viewer.animate({
                        longitude:marker.config.longitude,
                        latitude:marker.config.latitude,
                        zoom:100,
                        speed:"-2rpm",
                    }).then(()=>{
                        this.$emit('transfer',index);
                    })
                }
                else{
                    this.$emit('switch',marker.config.id);
                }
            });
            viewer.on("click",(e,data)=>{
                console.log(`logitude:${data.longitude};latitude:${data.latitude}`);
            });
            viewer.on('position-updated',(e,position)=>{

            });
        },
        changeImg(index){
            this.selectedImg=this.imgs[index];
            this.selectMarkers=this.allMarkers[index].markers;
            this.init();
            this.$forceUpdate();
        },
        getMarkers(markers){
            var list=[];
            for(var i in markers){
                let m=JSON.parse(JSON.stringify(markers[i]));
                var mr=null;
                if(m.type==0){
                    mr={
                        id:m.id,
                        type:m.gotoid,
                        circle:pointSize,
                        svgStyle:{
                            fill:fillColor,
                            stroke:strokeColor,
                            strokeWidth:strokeWidth
                        },
                        latitude:m.latitude,
                        longitude:m.longitude,
                        visible:true,
                        tooltip:{
                            content:m.tooltip,
                            position:"top center"
                        },
                        anchor:"center right"
                    }
                }else{
                    mr={
                        id:m.id,
                        type:0,
                        circle:pointSize,
                        svgStyle:{
                            fill:strokeColor,
                            stroke:fillColor,
                            strokeWidth:strokeWidth
                        },
                        latitude:m.latitude,
                        longitude:m.longitude,
                        visible:true,
                        tooltip:{
                            content:m.tooltip,
                            position:"top center"
                        },
                        anchor:"center right"
                    }
                }
                list.push(mr);
            }
            return list;
        }
    },
    
}

</script>
<style>
#viewer{
    width: 100%!important;
    height: 85vh!important;
    background: #E7F2FFFF;
}
</style>