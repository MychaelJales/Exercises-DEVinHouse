import Pessoa from "./Pessoa.js";
import Produto from "./Produto.js";
import { somaTudo, novoArray, calculaTotal } from "./utils.js";

const response1 = document.getElementById('response1');
const btn1 = document.getElementById('btn1');
const input1 = document.getElementById('input1');

const mensagemOla = () => {
  response1.innerText = `Olá, ${input1.value}!`; 
};

btn1.addEventListener('click', mensagemOla);

// exercício 2

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7,8 ,9];

const arrayQuadrados = arrayNumeros.map((num) => num * num);

console.log(arrayQuadrados);

const arrayTest = arrayQuadrados.filter((num)=> num > 30);

console.log(arrayTest);

// exercício 3

const response2 = document.getElementById('response2');
const response21 = document.getElementById('response21');
const btn2 = document.getElementById('btn2');
const input2 = document.getElementById('input2');

const produtos = [
  { nome: 'arroz', preco: 9 },
  { nome: 'feijao', preco: 12 },
  { nome: 'batata', preco: 8 },
  { nome: 'macarrao', preco: 5 },
];

const findProduct = () => {
  const produtoEncontrado = produtos.find(({ nome }) => nome === input2.value);
  if (produtoEncontrado) {
    response2.innerText = `Valor: ${produtoEncontrado.preco} Reais`
  } else {
    response2.innerText = 'Produto não encontrado';
  }
};

const reducer = () => {
  const total = produtos.reduce((acc, cur) => acc + cur.preco, 0);
  response21.innerText = `Valor total de ${total} Reais`
};

reducer();

btn2.addEventListener('click', findProduct);

// exercício 4

const patricia = new Pessoa('Patricia', '12345678901');
patricia.imprime();


// exercício 5

console.log(somaTudo(1, 2, 3, 4, 5, 6, 7));

//exercicio 6

console.log(novoArray([1, 2, 3], [4, 5, 6]));


//exercicio 7

const aguarda3Segundos = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  console.log('Funçaõ diz: Terminei!');
};

const euNaoEspero = () => {
  aguarda3Segundos()
  console.log('Eu não espero');
};

const euEspero = async () => {
   await aguarda3Segundos()
  console.log('Eu espero');
};

euNaoEspero();
euEspero();

// exercicio 8

const arroz = new Produto('arroz', 3, 9);
const feijao = new Produto('feijao', 2, 12);
const batata = new Produto('batata', 4, 8);
const macarrao = new Produto('macarrao', 1, 5);
const total = calculaTotal(arroz, feijao, batata, macarrao);
console.log(total);

//exercicio 9

const response3 = document.getElementById('response3');
const btn3 = document.getElementById('btn3');
const input3 = document.getElementById('input3');

const consultaCEP = async () => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${input3.value}/json`);
    const json = await response.json();
    response3.innerText = json.localidade;
  } catch (error) {
    console.log(error);
  }
};

btn3.addEventListener('click', consultaCEP);

// exercicio 10

const btn4 = document.getElementById('btn4');
const img = document.getElementById('img');

const trocaGatinho = async () => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const [json] = await response.json();
    img.src = json.url;
  } catch (error) {
    console.log(error);
  }
};

trocaGatinho();

btn4.addEventListener('click', trocaGatinho);
