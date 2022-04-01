const response1 = document.getElementById('response1');
const btn1 = document.getElementById('btn1');
const input1 = document.getElementById('input1');

const mensagemOla = () => {
  response1.innerText = `Olá, ${input1.value}!`; 
};

btn1.addEventListener('click', mensagemOla);