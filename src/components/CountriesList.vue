<template>
   <div class="country-show" v-if="filteredRegion.length == 0">
      Страна не найдена...
   </div>
   <div class="countries" v-else>
      <card-country
         style="margin: 20px"
         v-for="countryCard in pagination"
         :countryCard="countryCard"
         :key="countryCard.name.common"
         @click="
            $router.push({
               name: 'window',
               params: { name: countryCard.name.common },
            })
         "
      />
      <div class="conteiner_pagination">
         <p
            class="pagination"
            v-for="page in Math.round(filteredRegion.length / 25)"
            :key="page"
            @click="
               this.$store.commit('country/setPage', page),
                  this.$store.commit('country/setOffsetEnd', page * 25)
            "
         >
            {{ page }}
         </p>
      </div>
   </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
   name: 'countries-list',
   watch: {
      filteredRegion() {
         this.$store.commit('country/setOffsetStart', 0);
         this.$store.commit('country/setOffsetEnd', 25);
      },
   },
   methods: {
      ...mapActions({
         fetchCountries: 'country/fetchCountries',
      }),
      ...mapMutations({
         setPage: 'country/setPage',
      }),
   },
   computed: {
      ...mapState({
         countries: (state) => state.country.countries,
         page: (state) => state.country.page,
      }),
      ...mapGetters({
         filteredRegion: 'country/filteredRegion',
         pagination: 'country/pagination',
      }),
   },
   mounted() {
      this.fetchCountries();
   },
};
</script>
<style scoped>
.countries {
   width: 90%;
   min-height: 100vh;
   height: 100%;
   margin: auto;
   text-align: center;
   margin-top: 20px;
}
.search_panel {
   display: flex;
   justify-content: space-around;
   margin: 30px;
}
.country-show {
   font-size: 30px;
   text-align: center;
   margin-top: 10%;
   height: 100vh;
}
.pagination {
   border: solid 1px;
   border-radius: 5px;
   margin-left: 8px;
   font-size: 25px;
   text-align: center;
   width: 40px;
   cursor: pointer;
   opacity: 1;
}

.pagination:hover {
   opacity: 0.6;
}
.conteiner_pagination {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 70px;
}
</style>
