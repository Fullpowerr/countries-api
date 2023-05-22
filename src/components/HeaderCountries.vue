<template>
   <div class="header">
      <h1 @click="$router.push('/')" style="cursor: pointer">
         Where in this World??
      </h1>

      <my-button class="btn" v-if="!isActiv" @click="darkTheme">
         <img src="@/assets/img/icons8-яркая-луна-30.png" width="20" />
         Dark Mode
      </my-button>

      <my-button
         class="btn"
         v-else
         style="color: hsl(0, 0%, 52%)"
         @click="lightTheme"
      >
         <img
            style="color: white"
            src="@/assets/img/icons8-солнце-с-улыбкой-30.png"
            width="20"
         />
         Light Mode
      </my-button>
   </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
   name: 'header-countries',
   computed: {
      ...mapState({
         isActiv: (state) => state.country.isActiv,
      }),
   },
   methods: {
      ...mapMutations({
         darkTheme: 'country/darkTheme',
         lightTheme: 'country/lightTheme',
      }),
   },
};
</script>

<style scoped>
.header {
   height: 80px;
   width: 100%;
   align-items: center;
   justify-content: space-around;
   text-align: center;
   display: flex;
}
.btn {
   border: none;
   background-color: inherit;
   align-items: center;
   text-align: center;
   justify-content: center;
}
</style>
