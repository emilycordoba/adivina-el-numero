<template>
  <div id="app">
   <header-adivina></header-adivina>
   <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import headerAdivina from './components/Layout/Header.vue'
export default {
  components: {headerAdivina},
  name: 'app',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['user','ganadas'])
  },
}
</script>
<style lang="scss">
@import './scss/all.scss'
</style>

