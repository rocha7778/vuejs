<template>
  <template v-if="user">
    <router-view/>
  </template>
  <Auth v-else/>
  
</template>

<script>
import {onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import {auth } from './utils/firebase'
import Auth from './views/Auth'

export default ({
  name:"App",
  components: {
    Auth,

  },
  setup() {
    const store = useStore()
    const user = computed(()=> store.state.user)

    onMounted(()=>{
      console.log('Montado');
      auth.onAuthStateChanged((user)=>{
        store.commit("setUser",user)
        
      })
    })

    return {
      user,
    }
  },
})
</script>

