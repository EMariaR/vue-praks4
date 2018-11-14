 <template>
  <div class="home">
    <Navbar />

     <header>
       <div>
         <img class="logo" src="../assets/logo1.jpeg">
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
.nav {
	font-size: 17px;
    padding: 30px;
    position: relative;
}

.menu ul {
	display: flex;
	list-style: none;
    justify-content:flex-end;
    padding-right: 5px;
}

.nav a {
	color: #1a3300;
	padding: 20px;
}

nav a:hover {
	background-color: #8cff66;
}

nav a.active {
	background-color: #66ff33;
}

.nav-btn {
  display: none;
}

#nav-check {
  display: none;
}

header {
    background-color: #99cc00;
    padding:10px;
    text-align: center;
}

header p {
    font-size: 30px;
    font-weight: bold;
    float: left;
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 16px;
    color: #002633;
}

.logo {
    width: 90px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 5px;
    float: left;
}

</style>
