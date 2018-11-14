<template>
  <div class="koerad">
    <Navbar />
    
   <div class="grid-container">
    <div class="grid-item">
	 <img class="pilt-koer" src="koer2.jpg">
	 <p>Melanholia</p></div>
	<div class="grid-item">
	 <img class="pilt-koer" src="koer3.jpg">
	 <p>Leontine</p></div> 
	<div class="grid-item">
	 <img class="pilt-koer" src="koer4.jpg">
	 <p>Svamm</p></div> 
    <div class="grid-item">
	 <img class="pilt-koer" src="koer5.jpg">
	 <p>Armand</p></div> 
    <div class="grid-item">
	 <img class="pilt-koer" src="koer9.jpg">
	 <p>Rex</p></div> 
	<div class="grid-item">
	 <img class="pilt-koer" src="koer6.jpg">
	 <p>Helga</p></div> 
	<div class="grid-item">
	 <img class="pilt-koer" src="koer7.jpg">
	 <p>Päevakoer</p></div>
    <div class="grid-item">
	 <img class="pilt-koer" src="koer8.jpg">
	 <p>Gregorius</p></div>	
</div>
</div>

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';    

export default {
  name: 'koerad',
  components: {
    Navbar,
    Footer,
  },
};
</script>
