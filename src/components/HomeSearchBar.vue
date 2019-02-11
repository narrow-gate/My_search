<template>
<div class="home-search-bar">
    <input type="text" v-model="searchText" class="input-search" @keydown.enter="doSearch">
    <button class="btn-search" hidefocus="true" @click="doSearch">搜索一下</button>
    </div>    
</template>
<script>
import Util from "@/common/Util.js"
export default {
    name:"home-search-bar",
    data(){
        return {
            searchText:""
        }
    },
    methods:{
        doSearch(){
           Util.searchAPI(this.$router,this.searchText)
        }
    }
}
</script>

<style lang="less" scoped>
@import url(./../themes/base.less);
/*scoped：防止页面之间冲突*/
.home-search-bar{
max-width: 900px;
}
.input-search{
    outline: none;
    width: 60%;
 height:@home-search-bar-height;
    box-sizing: border-box;
background-color: 1px solid @color-border-gray;
vertical-align: bottom;
font-size: 1.2em;
border-top-left-radius:@home-search-bar-border-radius;
border-bottom-left-radius:@home-search-bar-border-radius;
padding: 20px;
}
.btn-search{
    outline: none;
    width: 20%;
 height:@home-search-bar-height;
    box-sizing: border-box;
background-color: @color-primary;
color: white;
font-size: 1.6em;
border: none;
border-top-right-radius:@home-search-bar-border-radius;
border-bottom-right-radius:@home-search-bar-border-radius;
}
</style>
