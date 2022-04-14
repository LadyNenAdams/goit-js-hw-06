const sliderFontControl = document.querySelector('#font-size-control');
let spanText = document.querySelector('#text');

spanText.style.fontSize =  `${sliderFontControl.value}px`;

sliderFontControl.addEventListener('input', (event) => {
    spanText.style.fontSize = event.target.value + "px";
  
});
