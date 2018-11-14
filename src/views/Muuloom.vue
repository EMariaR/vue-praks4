<template>
  <div class="muuloom">
    <Navbar />
    
<div class="grid-container">
    <div class="grid-item">
	 <img class="pilt-loom" src="kukk.jpg">
	 <p>Antonio</p></div>
	<div class="grid-item">
	 <img class="pilt-loom" src="jänes.jpg">
	 <p>Muff</p></div>
	<div class="grid-item">
	 <img class="pilt-loom" src="jänes2.jpg">
	 <p>Berta</p></div>
    <div class="grid-item">
	 <img class="pilt-loom" src="hamster.jpg">
	 <p>Trull</p></div>
</div>

</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'muuloom',
  components: {
    Navbar,
    Footer,
  },
};
</script>
