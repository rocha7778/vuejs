<template>
	<div class="auth">
		<Loggin v-if="showLogin" :changeForm="changeForm"/>
		<Register v-if="!showLogin"  :changeForm="changeForm"/>

	</div>
	
</template>

<script>
import Loggin from "../components/auth/Login"
import Register from "../components/auth/Register"
import  {ref} from "vue"

export default {
	name:"Auth",
	components : {
		Loggin,
		Register
	},

	setup(){

		let showLogin = ref(false)

		const changeForm = () =>{
			showLogin.value = !showLogin.value

		}
		return {
			showLogin,
			changeForm
		}
	},

}
</script>

<style lang="scss" scoped>

.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(4, 78, 157);
  background: linear-gradient(
    0deg,
    rgba(4, 78, 157, 1) 0%,
    rgba(0, 174, 255, 1) 100%
  );
}

</style>