<template>
  <div class="kassid">
    <Navbar />

 <div class="grid-container">
    <div class="grid-item">
	 <img class="pilt-kass" src="../assets/kass1b.jpg">
	 <p>Hommik</p></div>
	<div class="grid-item">
	 <img class="pilt-kass" src="../assets/kass2.jpg">
	 <p>Hildegard</p></div>
	<div class="grid-item">
	 <img class="pilt-kass" src="../assets/kass3.jpg">
	 <p>Madame</p></div>
    <div class="grid-item">
	 <img class="pilt-kass" src="../assets/kass4.jpg">
	 <p>Uudu</p></div>
    <div class="grid-item">
	 <img class="pilt-kass" src="../assets/kass5.jpg">
	 <p>Paldiski-Ruts</p></div>
	<div class="grid-item">
	 <img class="pilt-kass" src="../assets/kass1d.jpg">
	 <p>Tema Kõrgeausus</p></div>
	<div class="grid-item">
	 <img class="pilt-kass" src="../assets/kass7.jpg">
	 <p>Varivalge</p></div>
    <div class="grid-item">
	 <img class="pilt-kass" src="../assets/kass1c.jpg">
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
