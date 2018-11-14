import Vue from 'vue';
import Router from 'vue-router';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Kassid from './views/Kassid.vue';
import Koerad from './views/Koerad.vue';
import Kontakt from './views/Kontakt.vue';
import Kuulutused from './views/Kuulutused.vue';
import Loomad from './views/Loomad.vue';
import Muuloom from './views/Muuloom.vue';
import Toeta from './views/Toeta.vue';
import Varjupaigast from './views/Varjupaigast.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/kassid',
      name: 'kassid',
      component: Kassid,
    },
    {
      path: '/koerad',
      name: 'koerad',
      component: Koerad,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt,
    },
    {
      path: '/kuulutused',
      name: 'kuulutused',
      component: Kuulutused,
    },
    {
      path: '/loomad',
      name: 'loomad',
      component: Loomad,
    },
    {
      path: '/muuloom',
      name: 'muuloom',
      component: Muuloom,
    },
    {
      path: '/toeta',
      name: 'toeta',
      component: Toeta,
    },
    {
      path: '/varjupaigast',
      name: 'varjupaigast',
      component: Varjupaigast,
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer,
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar,
    },
  ],
});
