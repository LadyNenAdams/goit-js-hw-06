const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (email.length === 0 || password.length === 0) {
        alert('All fields are required for this form');
        return 
    } 
    console.log({email: email, password: password});
    loginForm.reset();
});

