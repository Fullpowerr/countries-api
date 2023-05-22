<template>
   <select
      class="select"
      :value="modelValue"
      @change="selectOptions"
      :class="{ dark_theme: isActiv }"
      title="filter by region"
   >
      <option class="option" disable value="">All regions</option>
      <option
         class="option"
         v-for="option in options"
         :key="option.name"
         :value="option.name"
      >
         {{ option.value }}
      </option>
   </select>
</template>

<script>
import { mapState } from 'vuex';
export default {
   name: 'select-filter',
   props: {
      options: {
         type: Array,
         required: true,
      },
      modelValue: {
         type: String,
      },
   },

   computed: {
      ...mapState({
         isActiv: (state) => state.country.isActiv,
      }),
   },
   methods: {
      selectOptions(event) {
         this.$emit('update:modelValue', event.target.value);
      },
   },
};
</script>

<style scoped>
.select {
   border: none;
   box-shadow: 0px 0px 14px -2px rgba(11, 12, 13, 0.14);
   padding: 10px;
   font-size: 15px;
   border-radius: 5px;
   cursor: pointer;
}
.option {
   background: transparent;
}
</style>
