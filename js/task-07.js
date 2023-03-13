// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
//В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const rangeInput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text')

textSpan.style.fontSize = rangeInput.value + 'px';

const textResizing = () => {
  textSpan.style.fontSize = `${rangeInput.value}px`;
};

rangeInput.addEventListener('input', textResizing);