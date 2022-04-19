<template>
  <div class="form">
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">CEP</span>
      <input type="text" class="form-control" v-model="cep" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <button class="btn btn-dark" type="button" @click="validaCep">Pesquisar CEP</button>
    <div v-if="end">
      <p>
        Endreço do CEP: {{ end.cep }} <br>
        Rua: {{ end.logradouro }} <br>
        Bairro: {{ end.bairro }} <br>
        Número/Complemento: {{ end.complemento }} <br>
        Cidade: {{ end.localidade }} <br>
        Estado: {{ end.uf }}
      </p>
    </div>
  </div>
</template>

<script>
import { ViaCEP } from 'viacep';

export default {
  name: 'FormularioVue',
  data() {
    return {
      cep: '',
      end: null,
    }
  },
  methods: {
    validaCep() {
      const cep = this.cep.replace(/\D/g, '');

      if (cep != '') {
        const regexCep = /^[0-9]{8}$/;

        if(regexCep.test(cep)) {
          this.buscaCep(cep);
        } else {
          this.cep = '';
          alert("Formato de CEP inválido.");
        }
      } else {
        alert("Digite um CEP válido.");
        this.cep = '';
      }
    },
    async buscaCep(cep) {
      try {
      const viacep = new ViaCEP()
      const data = await viacep.cep(cep);
      this.end = data;
    } catch (error) {
      console.log(error)
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
div p {
  padding-top: 30px;
}
</style>
