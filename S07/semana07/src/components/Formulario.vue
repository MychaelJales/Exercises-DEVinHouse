<template>
  <div class="form">
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">CEP</span>
      <input type="text" class="form-control" v-model="cep" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <button class="btn btn-dark" type="button" @click="validaCep">Pesquisar CEP</button>
  </div>
</template>

<script>
export default {
  name: 'FormularioVue',
  data() {
    return {
      cep: '',
    }
  },
  methods: {
    validaCep() {
      const cep = this.cep.replace(/\D/g, '');
      if (cep != '') {
        const regexCep = /^[0-9]{8}$/;

        if(regexCep.test(cep)) {
          console.log('Cep correto');
        } else {
          this.cep = '';
          alert("Formato de CEP inválido.");
        }
      } else {
        alert("Digite um CEP válido.");
        this.cep = '';
      }
    },
  }
}
</script>

<style scoped>
.form {
  width: 80vw;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
