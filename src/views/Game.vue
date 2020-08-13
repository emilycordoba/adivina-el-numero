<template>
  <div id="app">
    <div class="container">  
      <h1>  Adivina el numero </h1>
      <div class="container-btn">
        <!-- <button class="config btn-empezar" @click="empezarJuego" >Empezar</button> -->
        <button class="config btn-salir" v-show="empezar" @click="salirDelJuego">Salir del juego</button>
      </div>
      <template v-if="empezar">
        <div v-show="!ganoOperdio" class="introNumero">
          <input type="number" placeholder="Ingresa un numero" v-model.number="numero" @keyup.enter="adivinarElNumero">
          <button @click="adivinarElNumero" class="btn submit">Enviar</button>
        </div>
        <p>N° de Intentos: {{this.todosLosNumeros.length}}</p>
        <p>Numeros intentados: <span>{{this.todosLosNumeros.join(', ')}} </span></p>
        <p :class="[typeMensaje, colorMensaje]" v-if="(typeof(numero) == 'number' && enviado) || this.mensaje">{{ mensaje }}</p>
        <button @click="restablecer" class="btn again" v-show="ganoOperdio">Volver a jugar</button>
        
      </template>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data () {
    return {
      enviado: false,
      numero: '',
      mensaje: '',
      typeMensaje: 'message',
      colorMensaje: '',
      ganadasHere: 0
    }
  },
  computed: {
    ...mapState(['empezar','todosLosNumeros','ganadas', 'numeroRandom', 'intentos', 'ganoOperdio']),
  },
  created() {
    this.$store.commit('restablecer')
    console.log(this.numeroRandom)
  },
  methods: {
    ...mapMutations(['restablecer', 'generarNumero']),
    salirDelJuego(){
      this.$store.commit('setEmpezar', false)
      this.$store.commit('restablecer')
      this.$store.commit('setGanadas', 0)
      this.$store.commit('setIntentos', '')
      this.$router.push('/home')

    },
    adivinarElNumero() { 
      this.enviado = true
      console.log(this.numero,this.numeroRandom)
      console.log(this.todosLosNumeros)
      if(this.numero === this.numeroRandom) {
        this.mensaje = 'Ganaste'
        //this.ganadas++
        this.ganadasHere++
        this.$store.commit('setGanadas', this.ganadasHere )
        console.log(this.ganadas)
        this.colorMensaje = 'win-msg'
        this.$store.commit('setganoOperdio', true)
        //this.ganoOperdio = true
      } 
      else {
        if(this.numero > this.numeroRandom) {
          this.mensaje = 'El numero es muy grande'
          this.colorMensaje = 'big-msg'
        }
        else if (this.numero < this.numeroRandom) {
          this.mensaje = 'El numero es muy pequeño'
          this.colorMensaje = 'small-msg'
        }
      }
      if(this.todosLosNumeros.length >= (this.intentos -1)) {
        this.$store.commit('setganoOperdio', true)
        this.numero === this.numeroRandom ? this.mensaje = 'Ganaste' : 'Perdiste' // sumar ganadas
        
      }
      this.todosLosNumeros.push(this.numero)
      this.numero = ''
    }
  },
}
</script>

<style lang="scss">
@import '../scss/all.scss'
</style>
