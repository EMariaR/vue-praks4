<template>
  <div class="loomad">
    <Navbar />

<section class="flex-container">

    <div class="flex-item">
    <router-link to="koerad">
	  <img class="koerad" src="../assets/koer19.jpg">
        <h3>Koerad varjupaigas</h3></router-link></div>

	<div class="flex-item">
	<router-link to="kassid">
	 <img class="kassid" src="../assets/kass17.jpg">
        <h3>Kassid varjupaigas</h3></router-link></div>

	<div class="flex-item">
	<router-link to="muuloom">
	 <img class="muuloom" src="../assets/kukk.jpg">
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

<style scoped>

.flex-container {
	display: flex;
	flex-direction: row;
    justify-content: center;
	font-size: 25px;
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 80px;
}

.flex-item img {
    width: auto;
    border-radius: 50%;
    height: 400px;
    margin-left: 10px;
}

h3 {
	color: black;
    padding-bottom: 50px;
    text-align: center;
}
</style>
