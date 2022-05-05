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
            <slot>
              <div class="mb-3">
                <label for="titulo" class="form-label">Título</label>
                <input v-model="itemList.titulo" class="form-control" id="titulo" type="text" />
              </div>
              <div class="mb-3">
                <label for="descricao" class="form-label">Descrição</label>
                <input v-model="itemList.descricao" class="form-control" id="descricao" type="text" />
              </div>
              <div class="mb-3">
                <label for="valor" class="form-label">Valor</label>
                <input v-model.number="itemList.valor" class="form-control" id="valor" type="number" />
              </div>
              <div class="mb-3">
                <label for="tipo" class="form-label">Tipo</label>
                <select v-model="itemList.tipo" class="form-select" aria-label="Default select example">
                  <option selected disabled>Selecione o tipo</option>
                  <option value="+">Receita</option>
                  <option value="-">Despesa</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="data" class="form-label">Data</label>
                <input v-model="itemList.data" class="form-control" id="data" type="date" />
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <button type="button"  @click="saveItens({ ...itemList })" :class="'btn btn-'+variant" >Cadastrar Transação</button>
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
      closeModal: Function,
      saveItens: Function,
    },
    data(){
      return{
        itemList: {
          data: '',
          titulo: '',
          tipo: '',
          valor: 0,
          descricao: '',
        },
        OpenClose: this.visible
      }
    },
    methods:{
          OpenCloseFun(){
            this.OpenClose = false;
          },
    },
    watch: { 
        visible: function(newVal, oldVal) { // watch it
          this.OpenClose = newVal;
          console.log('new' +newVal+ '==' +oldVal)
        }
      }

  }
</script>
