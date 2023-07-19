const input = document.getElementById('validation-input');

input.addEventListener('blur', borderColor);

function borderColor(event) {
    const inputDataLength = Number(input.dataset.length);
    const inputValueLength = Number(input.value.length);

    if (inputValueLength === inputDataLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } 
}