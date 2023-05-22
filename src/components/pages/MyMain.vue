<template>
   <div class="main">
      <div class="search">
         <my-input
            style="padding: 5px"
            class="input"
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Search country..."
         />

         <select-filter
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            :options="region"
         />
      </div>

      <countries-list />
   </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
   name: 'my-main',
   methods: {
      ...mapMutations({
         setSearchQuery: 'country/setSearchQuery',
         setSearch: 'country/setSearch',
         setSelectedSort: 'country/setSelectedSort',
      }),
   },
   computed: {
      ...mapState({
         searchQuery: (state) => state.country.searchQuery,
         region: (state) => state.country.region,
         selectedSort: (state) => state.country.selectedSort,
      }),
   },
};
</script>

<style scoped>
.main {
   height: 100%;
}
.search_panel {
   justify-content: space-around;
   display: flex;
   align-items: center;
}
.wraper_page {
   display: flex;
   margin: 15px;
}
.page {
   border: 1px solid black;
   padding: 10px;
}
.currunt-page {
   border: 2px solid teal;
}
.observer {
   height: 30px;
   width: 100%;
   background-color: green;
}
.search {
   display: flex;
   justify-content: space-around;
   text-align: center;
   margin-top: 20px;
}
</style>
