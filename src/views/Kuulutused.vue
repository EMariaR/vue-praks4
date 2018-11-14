<template>
  <div class="kuulutused">
    <Navbar />
    
    <div class="kuulutuspk">
      <h1>KAOTATUD JA LEITUD LOOMAD</h1>
  </div>
     
  <div class="conatainer-k">
    <div class="wrapper">
     <div class="box">
		<img class="koer-k" src="koer11b.jpg" alt="Koerad"> 
		<p class="kadunud1"><b>Kadunud koerad</b></p>
	 </div>
	 	 
     <div class="box">
		<img class="kass-k" src="kass6.jpg" alt="Kassid"> 
		<p class="kadunud2"><b>Kadunud kassid</b></p>
        </div> </div>
        
   <div class="additing">
	   <h2 class="add-yourself">Lisa kuulutus</h2>
    <form class="outline">
        <select id="missing" name="missing">
            <option value="kaotatud">Kaotatud</option>
            <option value="leitud">Leitud</option>
        </select><br>
        <select id="animal-type" name="animal-type">
            <option value="koer">Koer</option>
            <option value="kass">Kass</option>
            <option value="muu loom">Muu loom</option>
         </select><br>
           <input type="text" id="breed-type" name="breed-type" placeholder="Nimi ja tõug"><br>
        <textarea id="subject" name="subject" placeholder="Looma kirjeldus" style="height:200px"></textarea><br>
          <input type="text" id="finding-date" name="finding-date" placeholder="Kaotamise/leidmise kuupäev"><br>
           <p id="add-file"><b>Lisa pilt loomast</b></p>
          <input type="file" id="chosen"><br>
          <input type="text" id="personal-epost" name="personal-epost" placeholder="Teie e-post"><br>
          <input type="text" id="personal-tel" name="personal-tel" placeholder="Teie telefon"><br>
         <input type="submit" value="Saada">
       </form></div> </div>
 
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'kuulutused',
  components: {
    Navbar,
    Footer,
  },
};
</script>
