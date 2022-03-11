// alert('Houston, temos um problema!');

const nome = prompt('Qual seu nome?');
const idade = Number(prompt('Qual sua idade?'));
const cidade = prompt('Qual sua cidade?');

console.log(`Seu nome é: ${nome}.`);
console.log(`Sua idade é: ${idade}.`);
console.log(`Sua cidade é: ${cidade}.`);

document.querySelector('.text-input').innerHTML = `Seu nome é: ${nome} `;

const onClickBtn = () => {
  const clickBtn = confirm('Deseja realmente clickar ?');
  if (clickBtn) {
    document.querySelector('.text-alert').innerHTML = 'Você clicou 😰'
  }
};

const btn = document.getElementById('btn');
btn.addEventListener('click',  onClickBtn);