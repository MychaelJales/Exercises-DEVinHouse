const Endereco = require('./adress')

class Cliente extends Endereco {
  constructor(props) {
    super();
    this.props = props;
  }

  printClient() {
    const {
      nome,
      cpf,
      celPhone
    } = this.props.cliente;
    console.log(`Nome: ${nome}; CPF: ${cpf}; Celular: ${celPhone}`);
  }

  validaCPF() {
    const { cpf } = this.props.cliente;
    if (cpf.length === 11) {
      alert('CPF válido');
      return true;
    } else {
      alert('CPF inválido, por favor, digite novamente');
      return false;
    }
  }
}

module.exports = Cliente;
