function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


let divCounts = 0;
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');



const createBoxes = (amount) => {
  const boxesArray = [];
  for (let i = 0; i<amount; i++){
    const div = document.createElement("div");
    div.style.width = 30+i*10+"px";
    div.style.height = 30+i*10+"px";
    div.style.backgroundColor = getRandomHexColor();
    boxesArray.push(div);
  };
  divBoxes.append(...boxesArray);
};

createBtn.addEventListener('click', () => {
  createBoxes(divCounts);
});



input.addEventListener('input', (event) => {
  divCounts = event.target.value;
});

destroyBtn.addEventListener('click', () => {
  divBoxes.innerHTML = "";
});