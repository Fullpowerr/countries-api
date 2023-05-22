<template>
   <div
      class="app"
      :class="{
         dark_theme: isActiv,
      }"
   >
      <header-countries />
      <hr
         class="hr"
         :class="{
            dark_theme: isActiv,
         }"
      />
      <router-view />
   </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
   name: 'app',
   computed: {
      ...mapState({
         isActiv: (state) => state.country.isActiv,
      }),
   },
};
</script>

<style>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Rubik', sans-serif;
}
.dark_theme {
   background-color: hsl(207, 26%, 17%);
   color: hsl(0, 0%, 100%);
}
.hr {
   border: none; /* Убираем границу для браузера Firefox */
   color: #dcdcdc; /* Цвет линии для остальных браузеров */
   background-color: #dcdcdc; /* Цвет линии для браузера Firefox и Opera */
   height: 2px; /* Толщина линии */
}
</style>
