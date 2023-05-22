<template>
   <button
      class="btn"
      :class="{
         dark_theme: isActiv,
      }"
   >
      <slot></slot>
   </button>
</template>

<script>
import { mapState } from 'vuex';
export default {
   name: 'my-button',
   computed: {
      ...mapState({
         isActiv: (state) => state.country.isActiv,
      }),
   },
};
</script>

<style scoped>
.btn {
   border: none;
   border-radius: 5px;
   padding: 10px 20px;
   font-size: 18px;
   background-color: inherit;
   cursor: pointer;
}
.dark_theme {
   color: hsl(0, 0%, 100%);
}
</style>
