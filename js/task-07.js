const inputFontSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

inputFontSize.addEventListener('input', event => {
    text.style.fontSize = `${event.target.value}px`
})