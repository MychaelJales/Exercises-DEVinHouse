<template>
  <div id="app">
    <button type="button" @click="iniciar = true">Iniciar</button>
    <button type="button" @click="iniciar = false">Parar</button>
    <my-cronometro :iniciar="iniciar" />
  </div>
</template>

<script>
import myCronometro from './components/myCronometro.vue'

export default {
  components: { myCronometro },
  name: 'app',
  data () {
    return {
      iniciar: false,
    }
  },

}
</script>

<style>
</style>
