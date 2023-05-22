import MyMain from '@/components/pages/MyMain.vue';
import { createRouter, createWebHistory } from 'vue-router';
import WindowCountryCard from '@/components/pages/WindowCountryCard.vue';
import WindowCountryBorder from '@/components/pages/WindowCountryBorder.vue';

const routes = [
   {
      path: '/',
      name: 'main',
      component: MyMain,
   },

   {
      path: '/:name',
      name: 'window',
      component: WindowCountryCard,
   },
   {
      path: '/:code',
      name: 'codeCountry',
      component: WindowCountryBorder,
   },
];

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL),
});

export default router;
