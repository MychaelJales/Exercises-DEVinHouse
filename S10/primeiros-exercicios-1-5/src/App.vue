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
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      show: true,
    }
  },
  components: {
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

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: all 2s ease;
}

.v-leave-to {
  opacity: 0;
}

.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: opacity 2s ease;
}
</style>
