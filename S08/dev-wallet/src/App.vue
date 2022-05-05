<template>
  <div>
    <button type="button" @click="this.controlaModal" class="btn btn-warning">Adicionar Movimentação</button>
    <my-table :list="list" :excluirTransacao="excluirTransacao"/>
    <my-modal :itemList="itemList" :visible="visible" :variant="variant" :saveItens="saveItens" :closeModal="controlaModal" />
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
      itemList: {
        data: '',
        titulo: '',
        tipo: '',
        valor: 0,
        descricao: '',
      },
    }
  },
  methods: {
    controlaModal() {
      this.visible = !this.visible;
    },
    saveItens(item) {
      const id = Date.now()
      this.list.push({...item, id});
      this.itemList = {
        data: '',
        titulo: '',
        tipo: '',
        valor: 0,
        descricao: '',
      };
      this.visible = !this.visible;
    },
    excluirTransacao(itemId) {
      const newList = this.list.filter(({id}) => id !== itemId);
      this.list = newList;
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
