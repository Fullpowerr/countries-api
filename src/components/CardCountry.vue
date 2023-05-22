<template>
   <div class="card">
      <div calss="png_flag">
         <img class="img" :src="countryCard.flags.png" />
      </div>
      <div class="text">
         <h2>{{ countryCard.name.common }}</h2>
         <div>Popular: {{ countryCard.population }}</div>
         <div>Region: {{ countryCard.region }}</div>
         <div>Capital: {{ String(countryCard.capital) }}</div>
         <div>{{ countryCard.index }}</div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'card-country',
   props: {
      countryCard: {
         type: Object,
         required: true,
      },
   },
};
</script>

<style scoped>
.card {
   width: 250px;
   height: 350px;
   border-radius: 10px;
   display: inline-block;
   margin: 10px;
   vertical-align: top;
   box-shadow: 0px 0px 14px -2px rgba(11, 12, 13, 0.14);
}
.img:hover {
   transform: scale(1.1);
}
.img {
   width: 100%;
   height: 150px;
   border-radius: 10px;
   transition: 0.7s;
   cursor: pointer;
}
.text {
   line-height: 25px;
   margin-top: 20px;
}
</style>
