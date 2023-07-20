function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector('#boxes');

buttonCreate.addEventListener('click', handlerCreateClick);
function handlerCreateClick() {
  const inputValue = Number(inputEl.value);
  boxesEl.innerHTML = "";
  createBoxes(inputValue)
  //console.log(inputEl.value);
}

buttonDestroy.addEventListener('click', handlerDestroyClick);
function handlerDestroyClick() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;
  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box)
    boxWidth += 10;
    boxHeight += 10;

    //console.log(box);
  }

  boxesEl.append( ...boxesArray);
}
