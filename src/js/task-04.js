let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueSpan = document.querySelector('#value');

incrementBtn.addEventListener('click', () => {
counterValue++;
valueSpan.innerText = counterValue;
});
decrementBtn.addEventListener('click', () => {
counterValue--;
valueSpan.innerText = counterValue;
});


