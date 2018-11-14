<template>
  <div class="kuulutused">
    <Navbar />

    <div class="kuulutuspk">
      <h1>KAOTATUD JA LEITUD LOOMAD</h1>
  </div>

  <div class="conatainer-k">
    <div class="wrapper">
     <div class="box">
		<img class="koer-k" src="../assets/koer11b.jpg" alt="Koerad">
		<p class="kadunud1"><b>Kadunud koerad</b></p>
	 </div>

     <div class="box">
		<img class="kass-k" src="../assets/kass6.jpg" alt="Kassid">
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

<style scoped>
   .kuulutuspk {
    margin-left: 120px;
    margin-top: 20px;
    color: black;
}

.wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
}

.box {
	margin-right: 10px;
    margin-left: 50px;
    margin-right: 50px;
    color: black;
    font-size: 20px;
    text-align: center;
}

.koer-k {
	height: 350px;
    width: auto;
}

.kass-k {
	height: 350px;
    width: auto;
}

.additing{
    background-color: #a0ffc0;
    width: 520px;
    padding: 5px;
    margin-left: 120px;
    margin-bottom: 10px;
    color: black;
    font-size: 20px;
}

input {
    padding: 5px;
    font-size: 15px;
}

#missing, #animal-type, #breed-type, #subject, #finding-date, #chosen, #add-file, #personal-epost, #personal-tel {
    margin-bottom: 10px;
    padding: 5px;
    width: 500px;
    font-size: 15px;
}
</style>
