<template>
  <div class="loomad">
    <Navbar />
    
<section class="flex-container">
   
    <div class="flex-item">
    <router-link to="koerad">
	  <img class="koerad" src="koer19.jpg">
        <h3>Koerad varjupaigas</h3></router-link></div>
		
	<div class="flex-item">
	<router-link to="kassid">
	 <img class="kassid" src="kass17.jpg">
        <h3>Kassid varjupaigas</h3></router-link></div>
 
	<div class="flex-item">
	<router-link to="muuloom">
	 <img class="muuloom" src="kukk.jpg">
        <h3>Teised loomad varjupaigas</h3></router-link></div>
	 
	 <div class="clearfix"></div>
</section>

</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'loomad',
  components: {
    Navbar,
    Footer,
  },
};
</script>
