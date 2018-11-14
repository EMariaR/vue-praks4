
<template>
 <div class="varjupaigast">
    <Navbar />

  <img class="taust2" src="../assets/taustale4.jpg">

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

<style scoped>
.varjupaik {
    margin-bottom: 380px;
    margin-top: 170px;
    size: 100px;
    color: black;
}

.varjupaik h2 {
    font-weight: bold;
    color: black;
    padding-left: 50px;
    padding-bottom: 20px;
}

.varjupaik p {
    font-weight: bold;
    color: black;
    font-size: 20px;
    padding-left: 50px;
    padding-bottom: 10px;
}

.taust2 {
    position: absolute;
    opacity: 0.5;
    width:100%;
}

</style>
