const Cliente = require('./client');

class Conta extends Cliente {
  constructor(props) {
    super();
    this.props = props;
  }

  printConta () {
    const {
      numero,
      saldo,
    } = this.props.conta;
    console.log(`Número da conta : ${numero}; Saldo ${saldo};`);
  }
}

module.exports = Conta;