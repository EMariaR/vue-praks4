<template>
  <div class="kontakt">
    <Navbar />

   <div class="kontakt">
	<h3>KONTAKT</h3>
		<ul>
			<li>Aadress: Roosi 1</li>
			<li>Telefoninumber: 1234567</li>
			<li>E-mail: info@varjupaik.ee</li>
		</ul>
  </div>

<div class="map">
	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16729.78595067904!2d26.7380977!3d58.3896357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36c0e21d5a79%3A0x3f644e8de0dd4eb5!2sTartu+Loomade+Varjupaik!5e0!3m2!1set!2see!4v1539968712937" width="900" height="750" frameborder="0"	style="border:0" allowfullscreen></iframe>
    </div>

 <div class="clearfix"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'kontakt',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.kontakt ul {
    font-size: 30px;
    padding-left: 50px;
    color: black;
}

.kontakt h3 {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 20px;
    padding-top: 40px;
    padding-left: 50px;
    text-align: left;
    color: black;
}

.map {
    padding-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>
