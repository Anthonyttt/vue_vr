<template>
    <div>test</div>
    <list-item title="竹编灯罩" price="80" url="http://localhost:8094/common/image/Map.jpg"/>
    <list/>
</template>

<script>
import hotel from '../components/opPanel.vue';
import listItem from "@/components/listItem.vue";
import list from "@/components/list.vue";
export default{
    components:{
        hotel,
        listItem,
        list,
    }
}
</script>