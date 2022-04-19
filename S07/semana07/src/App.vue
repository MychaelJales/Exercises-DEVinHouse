<template>
  <div class="container">
    <FormularioVue />
  </div>
</template>

<script>
import FormularioVue from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
    FormularioVue
  }
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
