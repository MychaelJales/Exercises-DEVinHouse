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
