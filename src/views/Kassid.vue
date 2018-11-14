<template>
  <div class="kassid">
    <Navbar />
    
 <div class="grid-container">
    <div class="grid-item">
	 <img class="pilt-kass" src="kass1b.jpg">
	 <p>Hommik</p></div>
	<div class="grid-item">
	 <img class="pilt-kass" src="kass2.jpg">
	 <p>Hildegard</p></div>
	<div class="grid-item">
	 <img class="pilt-kass" src="kass3.jpg">
	 <p>Madame</p></div>
    <div class="grid-item">
	 <img class="pilt-kass" src="kass4.jpg">
	 <p>Uudu</p></div>
    <div class="grid-item">
	 <img class="pilt-kass" src="kass5.jpg">
	 <p>Paldiski-Ruts</p></div>
	<div class="grid-item">
	 <img class="pilt-kass" src="kass1d.jpg">
	 <p>Tema Kõrgeausus</p></div>
	<div class="grid-item">
	 <img class="pilt-kass" src="kass7.jpg">
	 <p>Varivalge</p></div>
    <div class="grid-item">
	 <img class="pilt-kass" src="kass1c.jpg">
	 <p>Pilveke</p></div>
</div>

    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'kassid',
  components: {
    Navbar,
    Footer,
  },
};
</script>
