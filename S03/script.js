// exercício 1
/* const nome = prompt('Qual seu nome?');
const idade = Number(prompt('Qual sua idade?'));

const querPraticar = confirm('Quer praticar um esporte? ');

if (querPraticar) {
  alert(`${nome}, de ${idade} anos, quer praticar esportes`);
} else {
  alert(`${nome}, de ${idade} anos, não quer praticar esportes`);
} */

// exercício 2
/* const ePar = () => {
  const num = Number(document.getElementById('input-num').value);
  const response = document.getElementById('response');
  if ((num % 2) === 0 ) {
    response.innerText = 'É par';
  } else {
    response.innerText = 'É ímpar';
  }
} */

// exercício 3
const calc = ({ target }) => {
  const num1 = Number(document.getElementById('input-num1').value);
  const num2 = Number(document.getElementById('input-num2').value);
  const response = document.getElementById('response');
  const operator = target.value;
  const operation = eval(`${num1} ${operator} ${num2}`);
  response.innerText = `Resposta: ${num1} ${operator} ${num2} = ${operation}`;
}
