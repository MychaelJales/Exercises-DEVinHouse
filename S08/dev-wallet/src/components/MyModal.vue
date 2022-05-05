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
            <vee-form :validation-schema="schema" v-slot="{ errors }">
              <div class="mb-3">
                <label for="titulo" class="form-label">Título</label>
                <vee-field name="titulo" v-model="titulo" class="form-control" id="titulo" type="text" />
                <span>{{ errors.titulo }}</span>
              </div>
              <div class="mb-3">
                <label for="descricao" class="form-label">Descrição</label>
                <vee-field name="descricao" v-model="descricao" class="form-control" id="descricao" type="text" />
                <span>{{ errors.descricao }}</span>
              </div>
              <div class="mb-3">
                <label for="valor" class="form-label">Valor</label>
                <vee-field name="valor" v-model.number="valor" class="form-control" id="valor" type="number" />
                <span>{{ errors.valor }}</span>
              </div>
              <div class="mb-3">
                <label for="tipo" class="form-label">Tipo</label>
                <select v-model="tipo" class="form-select" aria-label="Default select example" >
                  <option selected disabled>Selecione o tipo</option>
                  <option value="Receita">Receita</option>
                  <option value="Despesa">Despesa</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="data" class="form-label">Data</label>
                <vee-field name="data" v-model="data" class="form-control" id="data" type="date" />
                <span>{{ errors.data }}</span>
              </div>
              <div class="modal-footer">
                <button @click="saveItens({ titulo, tipo, data, descricao, valor })" :class="'btn btn-'+variant" :disabled="btnDisabled">Cadastrar Transação</button>
              </div>
            </vee-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Form, Field } from 'vee-validate';
  import { defineRule } from 'vee-validate';
  import { required, min_value } from '@vee-validate/rules';
  import { schema } from '../helpers/validations';
  defineRule('required', required);
  defineRule('min_value:1', min_value);

  export default {
    name: 'AlertDefault',
    components: {
      'vee-form': Form,
      'vee-field': Field,
    },
    props: {
      visible: Boolean,
      variant: String,
      itemList: Object,
      closeModal: Function,
      saveItens: Function,
    },
    data(){
      
      return{
        schema,
        titulo: this.itemList.titulo,
        tipo: this.itemList.tipo,
        data: this.itemList.data,
        descricao: this.itemList.descricao,
        valor: this.itemList.valor,
        itemListModal: this.itemList,
        OpenClose: this.visible,
      }
    },
    methods:{
    },
    computed: {
      btnDisabled: function() {
        const { titulo, descricao, valor, tipo, data } = this;
        if (titulo === '' || descricao === '' || valor === 0 || tipo === '' || data === '') {
          return true;
        } else {
          return false;
        }
      },
    },
    watch: { 
      visible: function(newVal) { // watch it
        this.OpenClose = newVal;
      },
      itemList: function() { // watch it
        this.titulo = this.itemList.titulo;
        this.tipo = this.itemList.tipo;
        this.data = this.itemList.data;
        this.descricao = this.itemList.descricao;
        this.valor = this.itemList.valor;
      },
    }
  }
</script>
