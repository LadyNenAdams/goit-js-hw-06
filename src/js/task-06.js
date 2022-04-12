const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
    input.className = event.target.value.length === Number(input.dataset.length) ? 'valid' : 'invalid'
} );
