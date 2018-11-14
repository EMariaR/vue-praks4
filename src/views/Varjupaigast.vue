
<template>
 <div class="koerad">
    <Navbar />

  <img class="taust2" src="taustale4.jpg">
  
  <div class="varjupaik">
      <h2>VARJUPAIGAST</h2>
      <p>Meie visioon: Igal loomal on oma kodu</p>
      <p>Meie missioon: Aidata loomad koju tagasi, <br>leida omanikuta loomadele uued armastavad <br>kodud ja teavitada inimesi  soovimatute <br>lemmikloomade arvukusest.</p>
      <p>Meie põhiväärtused: Hooli loomadest. <br>Tee teistega koostööd. Austa ja toeta kõiki inimesi <br>ja loomi.</p>
      <p>Me juhindume oma töös vabaühenduste <br>eetikakoodeksist ja annetuste kogumise heast tavast.</p>
      <p>Oleme tööandjaks 45le toredale inimesele üle Eesti.</p>
  </div>
</div>
</template>  
  
  <script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'varjupaigast',
  components: {
    Navbar,
    Footer,
  },
};
</script>
