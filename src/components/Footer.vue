<template>

    <footer class="footer">
		<div class="ikoonid">
		<ul>
            <li><router-link to="https://plus.google.com/" class="google"><img src="../assets/google.svg" alt="google plus logo"></router-link></li>
            <li><router-link to="https://facebook.com/" class="facebook"><img src="../assets/facebook.svg" alt="facebook logo"></router-link></li>
            <li><router-link to="https://twitter.com/" class="twitter"><img src="../assets/twitter.svg" alt="twitter logo"></router-link></li>
		</ul> </div>
	 <p>Copyright &copy; EMR</p>
</footer>

</template>

<script>
export default {
  name: 'Footer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
	font-family: Merienda, Arial, sans-serif;
	text-align: center;
	color: #1a3300;
    background-color: #99cc00;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
}

.footer p {
	font-size: 20px;
	font-weight: regular;
	padding-top: 40px;
	padding-bottom: 25px;
}

.ikoonid ul {
	display: flex;
	justify-content: center;
	width: auto;
	height: 15px;
}

.ikoonid img {
	width: 35px;
	height: 35px;
	padding-left: 3px;
	padding-right: 3px;
    margin-top: 15px;
	max-width: 100%;
}
</style>
