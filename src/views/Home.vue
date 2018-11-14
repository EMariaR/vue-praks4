<template>
  <div class="home">
    <Navbar />
  
  <div class="hero-image">
      <img src="../assets/koer11.jpg">
       <div class="tekst">
       <h1 class="inset">Loomade varjupaik</h1>
    </div>
   </div>


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


    <section class="avakontakt">
        <div class="map-ava">
	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16729.78595067904!2d26.7380977!3d58.3896357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36c0e21d5a79%3A0x3f644e8de0dd4eb5!2sTartu+Loomade+Varjupaik!5e0!3m2!1set!2see!4v1539968712937" width="500" height="350" frameborder="0"	style="border:0" allowfullscreen></iframe>
    </div>

        <div class="kontakt-ava">
		<ul>
            <li>Oleme avatud: E-R 9.00-18.00 L, P: 10.00-15.00</li>
			<li>Aadress: Roosi 1</li>
			<li>Telefoninumber: 1234567</li>
			<li>E-mail: info@varjupaik.ee</li>
		</ul>
  </div>

 <div class="clearfix"></div>
   </section>
  </div>

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>

.hero-image {
  height: 50%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 350px;
}

.avakontakt {
	display: flex;
	flex-direction: row;
    justify-content: flex-start;
}

.kontakt-ava {
    font-size: 20px;
    padding-left: 30px;
    padding-right: 20px;
    color: black;
}

.map-ava {
    padding-left: 50px;
    padding-bottom: 20px;
}

.inset {
    font-size: 55px;
    text-align: center;
    top: 50%;
    color: #99cc00;
    text-shadow:
    5px 5px 7px #1a3300,
    5px 5px 7px #1a3300;
    line-height: 3px;
}

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
