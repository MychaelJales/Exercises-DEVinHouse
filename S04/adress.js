class Endereco {
  constructor(props) {
    this.props = props;
  }

  printAdress () {
    const { logradouro, numero, cidade, estado, pais, cep } = this.props;
    console.log(`Meu endereço: ${logradouro}, ${numero}, ${cidade}, ${estado}, ${pais}, ${cep}`);
  }
}

module.exports = Endereco;
