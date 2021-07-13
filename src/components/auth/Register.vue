<template>
	<div class="register">
		<h1>Create Account</h1>

		<form class="ui form" v-on:submit.prevent="register">
			<div class="field">
				<input type="text" v-model="formRegister.email" name="email" id="email" placeholder="email">
			</div>
			<div class="field">
				<input type="password" v-model="formRegister.password" name="password" id="password" placeholder="password">
			</div>
			<div class="field">
				<input type="password" v-model="formRegister.password2" name="password2" id="password2" placeholder="confirm password">
			</div>
			<button type="submit" class="ui button positive">
				Register
			</button>
		</form>
		<p @click="changeForm">Login</p>
	</div>
	 
</template>

<script>
export default {
	name: "Register",
	props : {
		changeForm: Function
	},

	setup(){

		let formRegister = {
			email : '',
			password: '',
			password2:''


		}

		const register = ()=> {
			console.log(formRegister);

		}

		return {
			formRegister,
			register
			

		}



	}
}
</script>

<style lang="scss" scoped>

.register {
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 38px -5px rgba(0, 0, 0, 0.45);
  width: 400px;
  border-radius: 10px;

	h1 {
    text-align: center;
    margin-bottom: 30px;
  }

	 form {
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }

	p {
    text-align: center;
    margin-top: 30px;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}


</style>