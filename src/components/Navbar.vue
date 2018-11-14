 <template>
  <div class="home">
    <Navbar />
    
    <div>
     <header>
       <div>
         <img class="logo" src="logo1.jpeg">
         <p>&#128222; Telefon: 1234567</p>
       </div>
    	  
	<nav class="nav">
	<ul>
        <li><router-link to="active"  href="index.html#avaleht">Avaleht</router-link></li>
        <li><router-link to="loomad">Loomad varjupaigas</router-link></li>
        <li><router-link to="kuulutused">Kaotasid looma?</router-link></li>
        <li><router-link to="toeta">Toeta</router-link></li>
        <li><router-link to="varjupaigast">Varjupaigast</router-link></li>
        <li><router-link to="kontakt">Kontakt</router-link></li>
	</ul>
	</nav>
      <div class="clearfix"></div>
	<div class="hamburger">
			<span></span>
			<span></span>
			<span></span>
	</div>
       <div class="clearfix"></div>  
</header>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    
</style>
