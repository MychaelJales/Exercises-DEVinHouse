class Pessoa {
  #cpf;
  constructor(nome, cpf) {
    this.#cpf = cpf;
    this.nome = nome;
  }

  imprime() {
    console.log(`${this.nome} - ${this.#cpf}`);
  }
}

// const teste = new Pessoa('mychael', '101001010101');

// teste.imprime();

export default Pessoa;
