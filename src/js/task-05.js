let userName = "";
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (inputEvent) => {
 
  userName = inputEvent.target.value;
  nameOutput.innerText = userName.length === 0 ? 'Anonymous' : userName;

});
