<template>
    <div id="scanBox">
<!--      <div class="arjs-loader">-->
<!--        <div>正在加载AR模型，请稍候...</div>-->
<!--      </div>-->
      <a-scene
        class="sceneBox"
        vr-mode-ui="enabled: false;"
        gesture-detector
        renderer="logarithmicDepthBuffer: true;precision:medium;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <!-- 图片训练后文件路径，不带文件拓展名！ -->
          <a-nft
            type="nft"
            url="../assets/nft/smoking_boy"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            <!-- 展示模型的路径 -->
            <a-entity
              gltf-model="./scene.gltf"
              scale="50 50 50"
              gesture-handler="minScale: 0.25; maxScale: 10"
              position="100 0 -200"
              rotation="-90 0 0"
            >
            </a-entity>
          </a-nft>
        <!-- static camera that moves according to the device movemenents -->
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  <!-- a-frame scene -->
  
</template>
<script>

export default{
  data(){
    return{
      
    }
  }
}
</script>
<style>
.arjs-loader {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: white;
}
#scanBox{
  margin:0px;
  overflow: hidden;

}
.sceneBox{
  position:relative;
}
</style>