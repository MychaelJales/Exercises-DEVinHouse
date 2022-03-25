class Endereco {
  constructor(props) {
    this.props = props;
  }

  printAdress () {
    const { logradouro, numero, cidade, estado, pais, cep } = this.props.endereco;
    console.log(`Meu endereço: ${logradouro}, ${numero}, ${cidade}, ${estado}, ${pais}, ${cep}`);
  }
}

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


const cadastrar = () => {
  const props = {
    cliente : {
      nome: document.getElementById('nome').value,
      cpf: document.getElementById('cpf').value,
      celPhone: document.getElementById('celPhone').value,
    },
    endereco: {
      logradouro: document.getElementById('logradouro').value,
      numero: document.getElementById('numero').value,
      cidade: document.getElementById('cidade').value,
      estado: document.getElementById('estado').value,
      pais: document.getElementById('pais').value,
      cep: document.getElementById('cep').value,
    }
  };

  console.log(props.cliente);
  const myClient = new Cliente(props);
  if (myClient.validaCPF()) {
    myClient.printClient();
    myClient.printAdress();
  } else {
    document.getElementById('cpf').value = null;
  }
}

const btnCadastrar = document.getElementById('btn-cadastrar');
btnCadastrar.addEventListener('click', cadastrar);