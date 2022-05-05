<template>
  <h2>Extrado de Movimentações</h2>
  <div class="my-table">
    <table v-if="list.length > 0">
      <thead>
        <tr>
          <th>Data</th>
          <th>Título</th>
          <th>Tipo</th>
          <th>Valor</th>
          <th>Descrição</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.data}}</td>
          <td>{{item.titulo}}</td>
          <td>{{item.tipo}}</td>
          <td>{{item.valor}}</td>
          <td>{{item.descricao}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <p v-else>Não existem dados para serem exibidos</p>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    list: Array,
  }
}
</script>

<style>
</style>