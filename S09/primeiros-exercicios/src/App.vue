<template>
  <div>
    <div>
      <p>Exercício 01</p>
      <h1 v-text="ex01"></h1>
      <input type="text" v-model="ex01">
    </div>
    <hr>
    <div>
      <p>Exercício 02</p>
      <h1 v-once v-text="ex02"></h1>
      <input type="text" v-model="ex02">
    </div>
    <hr>
    <div>
      <p>Exercício 03</p>
      <div v-html="html"></div>
    </div>
    <hr>
    <div>
      <p>Exercício 04</p>
      <label :style="{ color: ex04 }" for="ex04">Cor</label>
      <input id="ex04" type="text" v-model="ex04">
    </div>
    <hr>
    <div>
      <p>Exercício 05</p>
      <label v-if="ex05 === 'black'" :style="{ color: ex05 }" v-text="'Label Preto'"></label>
      <label v-else-if="ex05 === 'red'" :style="{ color: ex05 }" v-text="'Label Vermelho'"></label>
      <label v-else :style="{ color: ex05 }" v-text="'Outra cor'"></label>
      <button @click="ex05 = 'black'">Mostrar label Preto</button>
      <button @click="ex05 = 'red'">Mostrar label <span :style="{ color: 'red' }">Vermelho</span></button>
      <button @click="ex05 = 'blue'">Mostrar <span :style="{ color: 'blue' }">Outra cor</span></button>
    </div>
    <hr>
    <div>
      <p>Exercício 06</p>
      <ul>
        <li v-for="item in ex06" :key="item" v-text="item"></li>
      </ul>
    </div>
    <hr>
    <div>
      <p>Exercício 07</p>
      <my-header :titulo="ex07"></my-header>
      <input id="ex07" type="text" v-model="ex07">
    </div>
    <hr>
    <div>
      <p>Exercício 08</p>
      <label for="ex08Nome" v-font-size >Nome</label>
      <input id="ex08Nome" type="text" v-model="ex08Nome">
      <label for="ex08Idade" v-font-size>Idade</label>
      <input id="ex08Idade" type="number" v-model.number="ex08Idade">
      <button @click="adiciona" class="btn btn-primary">Adicionar</button>
      <hr>
      <p>Lista:</p>
      <table v-if="lista.length > 0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in lista" :key="item">
            <td>{{item.ex08Nome}}</td>
            <td>{{item.ex08Idade}}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Não há informações cadastradas</p>

    </div>
    <hr>
    <div>
      <p>Exercício 10</p>
      <h3>Blackjack:</h3>
      <button @click="novoJogo" class="btn btn-primary">Novo Jogo</button>
      <p v-if="jogando">Você está Jogando!</p>
      <p v-else-if="ganhou">Você Ganhou!</p>
      <p v-else>Você perdeu!</p>
      <hr>
      <p>Adversário: {{ adversario }} pontos</p>
      <p>Jogador: {{ jogador }} pontos</p>
      <p>Jogadas Restantes: {{ jogadasRestantes }}</p>
      <hr>
      <p>Carta: {{ carta }}</p>
      <button v-show="jogando" @click="novaCarta" class="btn btn-primary">Nova Carta</button>
      <button v-show="jogando" @click="parar" class="btn btn-primary">Parar</button>
    </div>
    <hr>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
export default {
  components: { MyHeader },
  name: 'App',
  data() {
    return {
      ex01: '',
      ex02: 'Old',
      ex04: '',
      ex05: 'Label Preto',
      ex06: ['item01', 'item 02', 'item 03'],
      ex07: '',
      ex08Nome: '',
      ex08Idade: 0,
      lista: [],
      html: '<h6>Banner</h6><img src="https://softauthor.com/wp-content/uploads/2020/04/create-a-banner-hero-unit-in-css-1-1024x365.png" style="width:300px"/>',
      adversario: 17,
      jogador: 0,
      jogadasRestantes: 3,
      carta: 0,
      jogando: true,
      ganhou: false,
    }
  },
  methods: {
    adiciona() {
      const { ex08Nome, ex08Idade } = this;
      this.lista.push({ex08Nome, ex08Idade});
      this.limpaCampos();
    },
    limpaCampos() {
      this.ex08Idade = 0;
      this.ex08Nome = '';
    },
    novoJogo() {
      this.jogador = 0;
      this.jogadasRestantes = 3;
      this.carta = 0;
      this.jogando = true;
    },
    novaCarta() {
      this.carta = Math.floor(Math.random() * 12);
      this.jogador += this.carta;
      this.jogadasRestantes -= 1;
      if (this.jogadasRestantes === 0) {
        this.testeGanhou();
      }
    },
    parar() {
      this.testeGanhou();
    },
    testeGanhou() {
      if (this.jogador > this.adversario) {
        this.ganhou = true;
        this.jogando = false;
      } else {
        this.ganhou = false;
        this.jogando = false;
      }
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
</style>
