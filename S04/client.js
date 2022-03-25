const Endereco = require('./adress')

class Cliente extends Endereco {
  constructor(props) {
    super();
    this.props = props;
  }

  printClient () {
    const {
      nome,
      cpf,
      celPhone
    } = this.props.cliente;
    console.log(`Nome: ${nome}; CPF: ${cpf}; Celular: ${celPhone}`);
  }
}

module.exports = Cliente;
