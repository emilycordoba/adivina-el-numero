<template>
  <div id="container">
    <header>
      <p>N° de veces ganado: {{ganadas}} </p>
      <div class="user">
        <p>{{this.user}}</p>
      </div>
    </header>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['user','ganadas'])
  },
}
</script>
<style lang="scss">
@import '../../scss/all.scss'
</style>
