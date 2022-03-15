const nome = prompt('Qual seu nome?');
const idade = Number(prompt('Qual sua idade?'));

const querPraticar = confirm('Quer praticar um esporte? ');

if (querPraticar) {
  alert(`${nome}, de ${idade} anos, quer praticar esportes`);
} else {
  alert(`${nome}, de ${idade} anos, não quer praticar esportes`);
}
