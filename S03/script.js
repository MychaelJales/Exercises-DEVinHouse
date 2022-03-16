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

// exercicio 5
window.onload = () => {
  const response4 = document.getElementById('response4');
  let currentTime = new Date;

  response4.innerText = `Hora: ${currentTime.getHours()}:${currentTime.getMinutes()} `;
  setInterval(() => {
    currentTime = new Date;
    response4.innerText = `Hora: ${currentTime.getHours()}:${currentTime.getMinutes()} `;
  }, 1000)

  // exercício 7
  const ex7 = () => {
    const response6 = document.getElementById('response6');
    const dayActual = currentTime.getDate();
    const monthActual = currentTime.getMonth() + 1;
    if ((monthActual == 12 && dayActual >= 22) || (monthActual <= 3 && dayActual <= 21)) {
      response6.innerText = 'Verão';
    } else if ((monthActual == 3 && dayActual >= 22) || (monthActual <= 6 && dayActual <= 21)) {
      response6.innerText = 'Outono';
    } else if ((monthActual == 6 && dayActual >= 22) || (monthActual <= 9 && dayActual <= 21)) {
      response6.innerText = 'Inverno';
    } else {
      response6.innerText = 'Primavera';
    }
  }

  ex7();
};

// exercício 6
const calcAge = () => {
  const dateInput = document.getElementById('input-date').value;
  const response = document.getElementById('response5');
  currentTime = new Date;
  const dayActual = currentTime.getDate();
  const monthActual = currentTime.getMonth() + 1;
  const yearActual = currentTime.getFullYear();
  const dateInputFormat = dateInput.split('-');
  let age;
  if (monthActual > Number(dateInputFormat[1])) {
    age = Number(yearActual) - Number(dateInputFormat[0]);
  } else if (dayActual >= Number(dateInputFormat[2])) {
    age = Number(yearActual) - Number(dateInputFormat[0]);
  } else {
    age = Number(yearActual) - Number(dateInputFormat[0]) - 1;
  }
  response.innerText = `Sua idade é: ${age} anos`;
};

// exercício 7 Dentro do onload do ex 5

// exércício 8
const inputList = () => {
  const itemList = document.getElementById('input-list');
  const list = document.getElementById('list');
  const liElement = document.createElement('li');
  
  if (!itemList.value) {
    alert('Insira algum item para lista')
  } else {
    /* btnRemove.type = 'button';
    btnRemove.id = "removeItem";
    btnRemove.innerText = 'Remover'
    liElement.appendChild(btnRemove); */
    liElement.innerHTML = `${itemList.value} <button type="button" onClick="removeItem(event)">Remover</button>`;
    list.appendChild(liElement);
    itemList.value = '';
  }
};

const removeItem = ({ target: { parentNode } }) => {
  console.log(parentNode);
  parentNode.remove();
}
