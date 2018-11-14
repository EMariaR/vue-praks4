<template>
  <div class="toeta">
    <Navbar />

<div class="toetamine">
         <img class="taust1" src="../assets/taustale5.jpg">
        <ul>
            <li><h2>TOETAMISE VÕIMALUSED</h2></li>
            <li>Rahaline annetus</li>
            <li>Mitterahaline annetus</li>
            <li>Heategevuspoed</li>
            <li>Tule vabatahtlikuks</li>
            <li>Paku loomale hoiukodu</li>
            <li>Adopteerimine</li>
        </ul>

        <div>
           <ul class="pank">
           <li>ÜLDRAVI, TOIT, HOOLDUSVAHENDID:<br>
           Konto: EE10 2200 2210 3155</li>
            <li>VIGASTATUD LOOMADE OPERATIIVNE RAVI:<br>
           Konto: EE52 2200 2210 6329</li>
           <li>HOIUPAIKADE REMONT JA EHITUS:<br>
           Konto: EE72 2200 2210 3954</li>
           <li>Saaja: Loomade Varjupaik</li>
        </ul>
       </div>
     </div>
        <div class="clearfix"></div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'toeta',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.toetamine {
    display: flex;
	flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 150px;
}

.toetamine h2 {
    font-weight: bold;
    color: black;
    padding-bottom: 10px;
    margin-top: 50px;
}

.toetamine li {
    font-weight: bold;
    color: black;
    font-size: 20px;
    padding-left: 60px;
    padding-bottom: 10px;
}

.pank {
    margin-top: 70px;
}

.taust1 {
    position: absolute;
    opacity: 0.5;
    float: right;
    width: 100%;
    max-height: 83%;
}

</style>
