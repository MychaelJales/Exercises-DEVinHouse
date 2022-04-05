import Pessoa from "./Pessoa.js";

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
