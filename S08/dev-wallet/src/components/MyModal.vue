<template>
  <div>
<!-- Modal -->
    <div v-if="OpenClose" class="modal fade show" 
    tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" 
    style="display:block">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <p>Adicionar Movimentação</p>
            <button type="button" @click="closeModal" class="btn-close" ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="onSubmit">
              <div class="mb-3">
                <label for="titulo" class="form-label">Título</label>
                <input v-model="itemListModal.titulo" class="form-control" id="titulo" type="text" required />
              </div>
              <div class="mb-3">
                <label for="descricao" class="form-label">Descrição</label>
                <input v-model="itemListModal.descricao" class="form-control" id="descricao" type="text" required />
              </div>
              <div class="mb-3">
                <label for="valor" class="form-label">Valor</label>
                <input v-model.number="itemListModal.valor" class="form-control" id="valor" type="number" required />
              </div>
              <div class="mb-3">
                <label for="tipo" class="form-label">Tipo</label>
                <select v-model="itemListModal.tipo" class="form-select" aria-label="Default select example" required>
                  <option selected disabled>Selecione o tipo</option>
                  <option value="+">Receita</option>
                  <option value="-">Despesa</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="data" class="form-label">Data</label>
                <input v-model="itemListModal.data" class="form-control" id="data" type="date" required />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit"  @click="saveItens({ ...itemList })" :class="'btn btn-'+variant" :disabled="btnDisabled">Cadastrar Transação</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlertDefault',
    props: {
      visible: Boolean,
      variant: String,
      itemList: Object,
      closeModal: Function,
      saveItens: Function,
    },
    data(){
      return{
        btnDisabled: true,
        itemListModal: this.itemList,
        OpenClose: this.visible,
      }
    },
    methods:{
      attBtn: function() {
        const { titulo, descricao, valor, tipo, data } = this.itemListModal;
        if (titulo === '' || descricao === '' || valor === 0 || tipo === '' || data === '') {
          this.btnDisabled = true;
        } else {
          this.btnDisabled = false;
        }
      },
    },
    updated() {
      this.attBtn();
    },
    watch: { 
      visible: function(newVal) { // watch it
        this.OpenClose = newVal;
      },
      itemList: function(newVal) { // watch it
        this.itemListModal = newVal;
      },
    }
  }
</script>
