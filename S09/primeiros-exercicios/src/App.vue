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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      ex01: '',
      ex02: 'Old',
      ex04: '',
      html: '<h6>Banner</h6><img src="https://softauthor.com/wp-content/uploads/2020/04/create-a-banner-hero-unit-in-css-1-1024x365.png" style="width:300px"/>'
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
