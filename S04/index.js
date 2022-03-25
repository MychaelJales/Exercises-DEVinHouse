class Endereco {
  constructor(props) {
    this.props = props;
  }

  print () {
    const { logradouro, numero, cidade, estado, pais, cep } = this.props;
    console.log(`Meu endereço: ${logradouro}, ${numero}, ${cidade}, ${estado}, ${pais}, ${cep}`);
  }
}

const props = {
  logradouro: 'Av dos bobos',
  numero: 007,
  cidade: 'los santos',
  estado: 'SF',
  pais: 'USA',
  cep: '00000-000',
};

const myAdress = new Endereco(props);

myAdress.print();
