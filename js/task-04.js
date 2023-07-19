let counterValue = 0;
const decrBtn = document.querySelector("button[data-action='decrement']");
const incrBtn = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");

function decrement (evt) {
    counterValue -= 1;
    value.textContent = counterValue;
}

function increment (evt) {
    counterValue += 1;
    value.textContent = counterValue;
}

decrBtn.addEventListener("click", decrement);
incrBtn.addEventListener("click", increment); 

