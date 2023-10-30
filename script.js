function validateEmailAndPassword() {
  const element = document.getElementsByClassName('input-form');
  const inputEmail = element[0].value;
  const inputPassword = element[1].value;
  if (inputEmail === 'cbdouglasvirissimo@hotmail.com' && inputPassword === '123456') {
    return window.alert('Olá, Douglas!');
  }
  return window.alert('Email ou senha inválidos.');
}

function disableButton() {
  const submitButton = document.getElementById('submit-btn');
  const checkBoxAgreement = document.getElementById('agreement');
  submitButton.disabled = !checkBoxAgreement.checked;
}

function insertValues() {
  const name = document.querySelector('#form-data p:nth-of-type(1)');
  const email = document.querySelector('#form-data p:nth-of-type(2)');
  const house = document.querySelector('#form-data p:nth-of-type(3)');
  const family = document.querySelector('#form-data p:nth-of-type(4)');
  const element = document.getElementsByClassName('principal-container')[0]
    .children;
  const inputFirstName = element[0];
  const inputLastName = element[1];
  const inputEmail = element[2];
  const inputHouse = element[3];
  const inputFamily = document.querySelector('input[name="family"]:checked');

  name.innerText = `Nome: ${inputFirstName.value} ${inputLastName.value}`;
  email.innerText = `Email: ${inputEmail.value}`;
  house.innerText = `Casa: ${
    inputHouse.options[inputHouse.selectedIndex].value
  }`;
  family.innerText = `Família: ${inputFamily.value}`;
}

function completedForm(event) {
  event.preventDefault();
  const schoolSubjects = document.querySelector('#form-data p:nth-of-type(5)');
  const evaluation = document.querySelector('#form-data p:nth-of-type(6)');
  const observations = document.querySelector('#form-data p:nth-of-type(7)');
  const inputCheckBox = document.querySelector('input[name="rate"]:checked');
  const inputTextArea = document.getElementById('textarea');

  document.getElementById('evaluation-form').style.display = 'none';
  document.getElementById('form-data').style.display = 'flex';
  insertValues();
  const checkBox = document.querySelectorAll('.subject');
  const listaMaterias = [];
  for (let index = 0; index < checkBox.length; index += 1) {
    if (checkBox[index].checked) listaMaterias.push(` ${checkBox[index].value}`);
  }
  schoolSubjects.innerText = `Matérias: ${listaMaterias}`;
  evaluation.innerText = `Avaliação: ${inputCheckBox.value}`;
  observations.innerText = `Observações: ${inputTextArea.value}`;
}

function reduceTextAreaCountNumber() {
  const area = document.getElementById('textarea').value;
  const counter = document.getElementById('counter');
  counter.innerHTML = 500 - area.length;
}

reduceTextAreaCountNumber();

document.querySelectorAll('button')[0].addEventListener('click', validateEmailAndPassword);
document.getElementById('submit-btn').addEventListener('click', completedForm);
document.getElementById('agreement').addEventListener('click', disableButton);
