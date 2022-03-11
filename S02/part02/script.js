// alert('Houston, temos um problema!');

const nome = prompt();

console.log(nome);

document.querySelector('.text-input').innerHTML = `Seu nome é: ${nome} `;

const onClickBtn = () => {
  const clickBtn = confirm('Deseja realmente clickar ?');
  if (clickBtn) {
    document.querySelector('.text-alert').innerHTML = 'Você clicou 😰'
  }
};

const btn = document.getElementById('btn');
btn.addEventListener('click',  onClickBtn);