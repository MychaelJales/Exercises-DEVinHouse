const Cliente = require('./client')

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

const props = {
  conta: {
    numero: '0000-0',
    saldo: 1000000
  },
  cliente: {
    nome: 'CJ',
    cpf: '000.000.000-00',
    celPhone: '(00) 00000-0000',
  },
  endereco: {
    logradouro: 'Av dos bobos',
    numero: 007,
    cidade: 'los santos',
    estado: 'SF',
    pais: 'USA',
    cep: '00000-000',
  }
};

const myConta = new Conta(props);

myConta.printConta();
myConta.printClient();
myConta.printAdress();
