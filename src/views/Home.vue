<template>
  <div id="app">
    <div class="container">  
      <h1>  Adivina el numero </h1>
      <div class="input-user">
      <input type="text" placeholder="N° de intentos" :value="intentos" @input="generarIntentos" required>
      <input type="text" placeholder="Usuario" v-model="userHere" maxlength="6">
      </div>
      <div class="container-btn">
        <button class="config btn-empezar" @click="empezarJuego" >Empezar</button>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
      userHere: ''
    }
  },
  computed: {
    ...mapState(['user','intentos', 'todosLosNumeros'])
  },
  methods: {
    empezarJuego(){
      this.$store.commit('setNumeros', new Array(this.intentos))
      console.log(this.todosLosNumeros)
      this.$store.commit('setEmpezar', true)
      this.$store.commit('restablecer')
      this.$store.commit('setUser', this.userHere)
      this.$router.push('game')
    },
    generarIntentos(e) {
      this.$store.commit('setIntentos', parseInt(e.target.value))
    }
  },
}
</script>

<style lang="scss">
@import '../scss/all.scss'
</style>
