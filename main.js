const form = document.getElementById('form-validacao');
const numeroCampoA = document.getElementById('campoA');
const numeroCampoB = document.getElementById('campoB');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const mensagemSucesso = `O número ${numeroCampoB.value} é maior que o número ${numeroCampoA.value}`;
  const containerMensagemSucesso = document.querySelector('.success-message');
  
  if(numeroCampoB.value > numeroCampoA.value) {
    
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
    document.querySelector('.error-message').style.display = 'none';

    numeroCampoA.value = '';
    numeroCampoB.value = '';

  } else {
    numeroCampoB.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
    containerMensagemSucesso.style.display = 'none';
    numeroCampoA.value = '';
    numeroCampoB.value = '';
  }
})

/* numeroCampoB.addEventListener('keyup', function(e) {
  console.log(e.target.value);
  formEValido = validaNumero(e.target.value,);

  if(!formEValido) {
    numeroCampoB.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    numeroCampoB.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
});
console.log(form); */