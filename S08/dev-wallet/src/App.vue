<template>
  <div>
    <button type="button" @click="this.controlaModal" class="btn btn-warning">Adicionar Movimentação</button>
    <my-table :list="list"/>
    <my-modal :visible="visible" :variant="variant" :saveItens="saveItens" :closeModal="controlaModal" />
  </div>
</template>

<script>
import MyModal from './components/MyModal.vue';
import MyTable from './components/MyTable.vue';

export default {
  name: 'App',
  components: {
    MyTable,
    MyModal,
  },
  data() {
    return {
      visible: false,
      variant: 'primary',
      list: [],
    }
  },
  methods: {
    controlaModal() {
      this.visible = !this.visible;
    },
    saveItens(item) {
      this.list.push(item);
      this.visible = !this.visible;
    }
  },
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
