<template>
  <div class="koerad">
    <Navbar />

   <div class="grid-container">
    <div class="grid-item">
	 <img class="pilt-koer" src="../assets/koer2.jpg">
	 <p>Melanholia</p></div>
	<div class="grid-item">
	 <img class="pilt-koer" src="../assets/koer3.jpg">
	 <p>Leontine</p></div>
	<div class="grid-item">
	 <img class="pilt-koer" src="../assets/koer4.jpg">
	 <p>Svamm</p></div>
    <div class="grid-item">
	 <img class="pilt-koer" src="../assets/koer5.jpg">
	 <p>Armand</p></div>
    <div class="grid-item">
	 <img class="pilt-koer" src="../assets/koer9.jpg">
	 <p>Rex</p></div>
	<div class="grid-item">
	 <img class="pilt-koer" src="../assets/koer6.jpg">
	 <p>Helga</p></div>
	<div class="grid-item">
	 <img class="pilt-koer" src="../assets/koer7.jpg">
	 <p>Päevakoer</p></div>
    <div class="grid-item">
	 <img class="pilt-koer" src="../assets/koer8.jpg">
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

<style scoped>
.grid-container {
  display:grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 5px 5px 20px 5px;
}

.grid-item {
  background-color: #8cff66;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  margin: 5px;
  color: black;
}

.pilt-koer {
	height: 250px;
    width: auto;
    margin-top: 8px;
    vertical-align: middle;
}

.pilt-kass {
	height: 230px;
    width: auto;
}

.pilt-loom {
	height: 230px;
    width: auto;
}
</style>
