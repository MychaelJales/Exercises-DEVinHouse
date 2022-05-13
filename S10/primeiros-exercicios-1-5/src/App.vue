<template>
  <div>
    <div>
      <p>Exercícios 01, 02 e 03</p>
      <transition mode="out-in">
        <header v-if="show"><h1>Apresentando H1</h1></header>
        <span v-else>O header não está mais disponível</span>
      </transition>
      <button @click="show = !show">Alterar estado</button>
    </div>
    <div>
      <p>Exercícios 04</p>
      <label for="nome"></label>
      <input type="text" name="nome" id="nome" v-model="nome">
      <label for="idade"></label>
      <input type="number" name="idade" id="idade" v-model.number="idade">
      <button @click="salvar">Salvar</button>
      <hr>
      <table v-if="lista.length > 0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th></th>
          </tr>
        </thead>
        <transition-group name="list" tag="tbody">
          <tr v-for="item in lista" :key="item.id">
            <td>{{ item.nome }}</td>
            <td>{{ item.idade }}</td>
            <td><button @click="excluir(item.id)">Excluir</button></td>
          </tr>
        </transition-group>
      </table>
      <p v-else>Não há Pessoas cadastradas</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: true,
      nome: '',
      idade: 0,
      lista: [],
    }
  },
  methods: {
    salvar() {
      const { nome, idade } = this;
      const id = Date.now();
      this.lista = [...this.lista, { nome, idade, id }];
      this.nome = '';
      this.idade = 0;
    },
    excluir(itemId) {
      const newLista = this.lista.filter(({ id }) => itemId !== id);
      this.lista = newLista;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-leave-from, .list-leave-from{
  opacity: 1;
}

.v-leave-active, .list-leave-active {
  transition: all 2s ease;
}

.v-leave-to, .list-leave-to {
  opacity: 0;
}

.v-enter-from, .list-enter-from {
  opacity: 0;
}

.v-enter-active, .list-enter-active {
  transition: opacity 2s ease;
}
</style>
