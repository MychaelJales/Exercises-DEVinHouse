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
    } = this.props;
    console.log(`Nome: ${nome}; CPF: ${cpf}; Celular: ${celPhone}`);
  }
}

const props = {
  nome: 'CJ',
  cpf: '000.000.000-00',
  celPhone: '(00) 00000-0000',
  logradouro: 'Av dos bobos',
  numero: 007,
  cidade: 'los santos',
  estado: 'SF',
  pais: 'USA',
  cep: '00000-000',
};

const myClient = new Cliente(props);

myClient.printClient();
myClient.printAdress();
