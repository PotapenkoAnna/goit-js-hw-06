function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}  

const bodyColor = document.querySelector('body');
const buttonChange = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttonChange.addEventListener('click', event => {
  let color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
})
 