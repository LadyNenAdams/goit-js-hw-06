function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector('body');
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.innerText = randomColor;
});