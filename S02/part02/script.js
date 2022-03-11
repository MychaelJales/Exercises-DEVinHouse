alert('Houston, temos um problema!');

const onClickBtn = () => {
  const clickBtn = confirm('Deseja realmente clickar ?');
  if (clickBtn) {
    document.querySelector('.text-alert').innerHTML = 'Você clicou 😰'
  }
};

const btn = document.getElementById('btn');
btn.addEventListener('click',  onClickBtn);