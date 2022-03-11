const onClickBtnSubmit = (event) => {
  event.preventDefault();
  const email = document.getElementById('inputEmail4').value;
  const password = document.getElementById('inputPassword4').value; 
  const name = document.getElementById('inputName').value; 
  const adress = document.getElementById('inputAddress').value; 
  const city = document.getElementById('inputCity').value; 
  const state = document.getElementById('inputState').value; 
  const cep = document.getElementById('inputCEP').value; 
  const isLife = document.getElementById('gridCheck').checked;
  const arrayInformations = [
    email,
    password,
    name,
    adress,
    city,
    state,
    cep,
    isLife,
  ];
  let filledForm = true;
  arrayInformations.forEach((info)=> {
    if (!info) { filledForm = false }; 
  })

  if (filledForm) {
    alert('Cadastro realizado com sucesso');
  } else {
    alert('Por favor, preencha todos os campos do formulário.');
  }
}

const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener("click", onClickBtnSubmit);

