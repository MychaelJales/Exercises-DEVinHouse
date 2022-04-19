<template>
  <div class="form">
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">CEP</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <button class="btn btn-dark" type="button">Pesquisar CEP</button>
  </div>
</template>

<script>
export default {
  name: 'FormularioVue',
}
</script>

<style scoped>
.form {
  width: 80vw;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
