<template>
<div>
	<h2>Loggin</h2>
	<button v-on:click="changeForm">Register</button>
</div>
	
</template>

<script>
export default {
	name:"Loggin",
	props:{
		changeForm:Function

	}

}
</script>

<style>

</style>