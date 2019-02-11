const First={
    doSearchResultAPI(route,SearchResultList){
        const { searchText }=route.params;//通过解构方式取数据，后面是json格式的数据
        if(DB.hasOwnProperty(searchText)){
          SearchResultList=DB[searchText];
        }
        else{
         SearchResultList=[];
        }
    }
}
export default First;