export default class Produto {
  constructor(nome, quantidade, valor) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.valor = valor;
  }
}

console.log(new Produto('teste', 23, 5));
