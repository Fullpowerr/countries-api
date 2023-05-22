<template>
   <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
      title="enter the text"
   />
</template>

<script>
export default {
   name: 'my-input',
   props: {
      modelValue: [String, Number],
   },
   methods: {
      updateInput(event) {
         this.$emit('update:modelValue', event.target.value);
      },
   },
};
</script>

<style scoped>
.input {
   background-color: inherit;
   color: inherit;
   font-size: 1rem;
   outline: 0;
   border: none;
   box-shadow: 0px 0px 18px -2px rgba(11, 12, 13, 0.14);
   border-radius: 5px;
}
</style>
