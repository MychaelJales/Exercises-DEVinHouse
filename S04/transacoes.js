const Conta = require('./conta');

class Transacoes extends Conta {
  constructor(props) {
    super();
    this.props = props;
  }

  valorDaTransacao(valor) {
    const { conta: { saldo } } = this.props;
    this.props.conta.transacoes.push(valor);
    this.props.conta.saldo = saldo + valor;
    const newSaldo = this.props.conta.saldo;
    if (valor > 0) {
      console.log(`Você fez uma depósito de ${valor}. Seu saldo atual é ${newSaldo}`);
    } else {
      console.log(`Você fez uma transferência de ${valor}. Seu saldo atual é ${newSaldo}`);
    }
  }

  get transferencia() {
    const { conta: { transacoes } } = this.props;
    const transferencias = transacoes.filter((transacao) => transacao < 0)
    return transferencias;
  }

  get deposito() {
    const { conta: { transacoes } } = this.props;
    const depositos = transacoes.filter((transacao) => transacao > 0)
    return depositos;
  }
}

const props = {
  conta: {
    transacoes: [],
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

myConta.valorDaTransacao(1000);
myConta.valorDaTransacao(-2000);
myConta.valorDaTransacao(1000);

console.log(myConta.transferencia);

console.log(myConta.deposito);
