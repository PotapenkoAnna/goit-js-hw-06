const inputName = document.getElementById('name-input');
const output = document.getElementById('name-output');
let anonymous = "Anonymous";

output.textContent = anonymous;

inputName.addEventListener('input', event => {
    output.textContent = event.target.value || anonymous
})