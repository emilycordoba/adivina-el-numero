import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        empezar: false,
        todosLosNumeros: new Array(),
        typeMensaje: 'message',
        colorMensaje: '',
        user: '',
        ganadas: 0,
        numeroRandom: 0,
        intentos: '',
        ganoOperdio: false
    },
    mutations: {
        setUser: (state, payload) => state.user = payload,
        setEmpezar: (state, payload) => state.empezar = payload,
        setGanadas: (state, payload) => state.ganadas = payload,
        setIntentos: (state, payload) => state.intentos = payload,
        setNumeros: (state, payload) => state.todosLosNumeros = payload,
        setganoOperdio: (state, payload) => state.ganoOperdio = payload,
        // setIntentos: (state, payload) => state.intentos = payload,
        restablecer: (state) => {
            state.todosLosNumeros = []
                //state.numero = '' hacerlo en Game.vue
            state.ganoOperdio = false
            state.numeroRandom = Math.floor(Math.random() * (100 - 1)) + 1
        },
        //generarNumero: (state,payload) => state.numeroRandom =  Math.floor(Math.random() * (100 - 1) ) +1 
    }
})
export default store
