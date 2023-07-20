const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    
    const object = {
        email: loginForm.elements.email.value,
        password: loginForm.elements.password.value,
    }
   
    if (object.email === "" || object.password === "") {
        return alert("Поле має бути заповненим");
    }
    console.log(object); 
    loginForm.reset();
}
