<template>
	<div class="register">
		<h1>Create Account</h1>

		<form class="ui form" v-on:submit.prevent="register">
			<div class="field">
				<input type="text" v-model="formRegister.email" name="email" id="email" placeholder="email" :class="{error : formError.email}">
			</div>
			<div class="field">
				<input type="password" v-model="formRegister.password" name="password" id="password" placeholder="password" :class="{error : formError.password}">
			</div>
			<div class="field">
				<input type="password" v-model="formRegister.repeatPassword" name="repeatPassword" id="repeatPassword" placeholder="confirm password" :class="{error : formError.repeatPassword}">
			</div>
			<button type="submit" class="ui button positive">
				Register
			</button>
		</form>
		<p @click="changeForm">Login</p>
	</div>
	 
</template>

<script>
import * as Yup from "yup"
import { ref } from "vue"

export default {
	name: "Register",
	props : {
		changeForm: Function
	},

	setup(){

		
		const schemaForm = Yup.object().shape({
			email : Yup.string().email(true).required(true),
			password : Yup.string().required(true),
			repeatPassword : Yup.string().required(true).oneOf([Yup.ref('password')],true)
		})

		let formRegister = {
			email : '',
			password: '',
			repeatPassword:''
		}

		let formError = ref({})

		const register = async ()=> {

			formError.value = {}
			try {

				await schemaForm.validate(formRegister,{abortEarly:false})
				console.log("Ok")
				
			} catch (error) {

				error.inner.forEach(error => {
					formError.value[error.path] = error.message
				});

			}

		}
		return {
			formRegister,
			register,
			formError
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