<template>
  <div class="search-page">
    <SearchResultToolBar :search="search"/>
    <div v-for="info in SearchResultList" :key="info.id">
<SearchResultItem :info="info" />
    </div>
      <div class="search-no-result" v-if="SearchResultList.length===0">
      没有搜索到任何内容!
    </div>
  </div>
</template>
<script>
import SearchResultToolBar from "@/components/SearchResultToolBar.vue"
import SearchResultItem from "@/components/SearchResultItem.vue"
const DB=require('./../data/search.json')//获取本地json数据
//import db from '@/data/search.json'
export default {
  data(){
    return {
SearchResultList:[],
    }
  },
  computed:{
search(){
  return this.$route.params.searchText
}
  },
  created(){
    this.doSearchResult()
  },
  beforeRouteUpdate(to,from,next){
    next(),
    this.doSearchResult();
  },
  methods:{
    doSearchResult(){
  const { searchText }=this.$route.params;//通过解构方式取数据，后面是json格式的数据
  if(DB.hasOwnProperty(searchText)){
    this.SearchResultList=DB[searchText];
  }
  else{
    this.SearchResultList=[];
  }
    }
  },
   components: {
 SearchResultToolBar,
 SearchResultItem
  },

}
</script>
<style lang="less" scoped>
.search-no-result{
  padding:20px;
  text-align: left;
}
</style>
