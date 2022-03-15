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
const ePar = () => {
  const num = Number(document.getElementById('input-num').value);
  const response = document.getElementById('response1');
  if ((num % 2) === 0 ) {
    response.innerText = 'É par';
  } else {
    response.innerText = 'É ímpar';
  }
}

// exercício 3
const calc = ({ target }) => {
  const num1 = Number(document.getElementById('input-num1').value);
  const num2 = Number(document.getElementById('input-num2').value);
  const response = document.getElementById('response2');
  const operator = target.value;
  const operation = eval(`${num1} ${operator} ${num2}`);
  response.innerText = `Resposta: ${num1} ${operator} ${num2} = ${operation}`;
}

// exercício 4
const calcP = ({ target }) => {
  const num3 = Number(document.getElementById('input-num3').value);
  const num4 = Number(document.getElementById('input-num4').value);
  const response = document.getElementById('response3');
  const { value : operator, innerText : typeOperation } = target;
  const result = [num3];
  for (let i = 0; i < 9; i += 1) {
    result.push( eval(`${result[i]} ${operator} ${num4}`) );
  }
  response.innerText = `Resposta da ${typeOperation}: ${result}`;
}
