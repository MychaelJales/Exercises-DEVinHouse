<template>
  <div>
    <button type="button" @click="this.controlaModal" class="btn btn-warning">Adicionar Movimentação</button>
    <my-table :list="list" :excluirTransacao="excluirTransacao"/>
    <my-modal :itemList="itemList" :visible="visible" :variant="variant" :saveItens="saveItens" :closeModal="controlaModal" />
    <footer>
      Receitas: R$ {{receita}}
      Despesas: R$ {{despesas}}
      Total: R$ {{total}}
    </footer>
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
      despesas: 0,
      receita: 0,
      total: 0,
      list: [],
      // numberItens: this.list.length,
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
      this.list = [...this.list, {...item, id}];
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
  watch: { 
      list: function() { // watch it
        this.receita = 0;
        this.total = 0;
        this.despesas = 0;
        const { list } = this;
        list.forEach(({tipo, valor}) => {
          if (tipo === '+') {
            this.receita += valor;
            this.total += valor;
          }
          if (tipo === '-') {
            this.despesas += valor;
            this.total -= valor;
          }
        });
      },
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
