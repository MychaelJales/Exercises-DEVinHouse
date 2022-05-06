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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      ex01: '',
      ex02: 'Old',
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
