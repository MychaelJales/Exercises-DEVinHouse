const Conta = require('./conta');

class Transacoes extends Conta {
  constructor(props) {
    super();
    this.props = props;
  }

  get transferencia() {
    const { conta: { saldo }, valorDaTransacao } = this.props;
    this.props.conta.saldo = saldo - valorDaTransacao;
    const newSaldo = this.props.conta.saldo;
    console.log(`Você fez uma transferência de ${valorDaTransacao}. Seu saldo atual é ${newSaldo}`);
    return newSaldo;
  }

  get deposito() {
    const { conta: { saldo }, valorDaTransacao } = this.props;
    this.props.conta.saldo = saldo + valorDaTransacao;
    const newSaldo = this.props.conta.saldo;
    console.log(`Você fez uma depósito de ${valorDaTransacao}. Seu saldo atual é ${newSaldo}`);
    return newSaldo;
  }
}

const props = {
  valorDaTransacao: 1000,
  conta: {
    numero: '0000-0',
    saldo: 1000000
  },
  cliente: {
    nome: 'CJ',
    cpf: '00000000000',
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

const myConta = new Transacoes(props);

myConta.printConta();
myConta.printClient();
myConta.printAdress();

myConta.transferencia;

myConta.deposito;
