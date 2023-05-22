<template>
   <div class="windows">
      <my-button class="btn" @click="$router.push('/')"> Back </my-button>
      <div
         class="detals_country"
         v-for="cardInfo in countryData"
         :key="cardInfo.name.common"
         :cardInfo="cardInfo"
      >
         <div class="img">
            <img :src="cardInfo.flags.png" style="width: 400; height: 300px" />
         </div>

         <div class="info_text">
            <h1 class="country">{{ cardInfo.name.common }}</h1>
            <p><strong>Native Name:</strong> {{ cardInfo.name.common }}</p>
            <p><strong>Population:</strong> {{ cardInfo.population }}</p>
            <p><strong>Region:</strong> {{ cardInfo.region }}</p>
            <p><strong>Sub Region:</strong> {{ cardInfo.subregion }}</p>
            <p><strong> Capital:</strong> {{ String(cardInfo.capital) }}</p>
            <p>
               <strong> Currencies: </strong
               >{{ Object.values(cardInfo.currencies)[0].name }}
            </p>
            <p>
               <strong>Languages: </strong
               >{{ String(Object.values(cardInfo.languages)) }}
            </p>
            <p>
               <strong>Border Countries: </strong>
            </p>
            <div class="borders">
               <button
                  class="border"
                  v-for="border in cardInfo.borders"
                  :key="border"
                  @click="
                     $router.push({
                        name: 'codeCountry',
                        params: { code: border },
                     })
                  "
               >
                  {{ border }}
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
   name: 'country-border',

   watch: {
      $route() {
         this.fetchBorderCountries(
            this.$route.params.code,
            this.setCodeCountry()
         );
      },
   },
   computed: {
      ...mapState({
         countryData: (state) => state.country.countryData,
      }),
   },
   methods: {
      ...mapActions({
         fetchBorderCountries: 'country/fetchBorderCountries',
         fetchCountry: 'country/fetchCountry',
      }),
      setCodeCountry() {
         this.$store.commit('country/setBorderName', this.$route.params.code);
      },
   },

   mounted() {
      this.fetchBorderCountries(this.$route.params.code, this.setCodeCountry());
   },
};
</script>

<style scoped>
.windows {
   height: 100vh;
}
img {
   border-radius: 10px;
}
.detals_country {
   display: flex;
   margin: 30px;
   align-items: center;
   justify-content: center;
}
.info_text {
   font-family: Nunito Sans;
   font-size: 22px;
   font-weight: 300;
   margin-right: 20%;
   margin: 30px;
   line-height: 30px;
}
.btn {
   margin-left: 20%;
   margin-top: 5%;
   box-shadow: 0px 0px 14px -2px rgba(11, 12, 13, 0.14);
}
.country {
   margin-bottom: 25px;
}
.borders {
   display: flex;
}
.border {
   margin: 5px;
   padding: 5px;
   cursor: pointer;
   border-radius: 5px;
   border: none;
   background-color: a3a3a3;
   font-family: Nunito Sans;
   font-size: 20px;
}
button:active {
   background-color: #333;
   border-color: #333;
   color: #eee;
}
</style>
