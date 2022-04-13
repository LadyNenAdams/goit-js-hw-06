const sliderFontControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

sliderFontControl.addEventListener('input', (event) => {
    spanText.style.fontSize = event.target.value + "px";
  
});