<template>
  <div class="search-result-toolbar">
    <img class="logo" src="./../assets/mysearch_logo_small.png" @click="goHome">
    <RoundSearchBar :search="search"/>
  </div>
</template>
<script>
import RoundSearchBar from "@/components/RoundSearchBar.vue"
export default {
    name:"search-result-toolbar",//指定名字，方便引用，允许组件模板递归地调用自身
 props:['search'],
 components: {
  RoundSearchBar
  },
  methods:{
    goHome(){
      this.$router.push("/");//回到根目录，通过 this.$router 访问路由器
    }
  }
}
</script>

<style lang="less" scoped>
@import url(./../themes/base.less);
.search-result-toolbar{
text-align: left;
padding: @space-large;
border-bottom: 1px solid @color-border-gray;
}
.logo{
  height: @round-search-bar-height*0.8;
  vertical-align: middle;
  margin:  @space-large;
}
</style>
