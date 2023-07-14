// Задание 1
const buttonEl = document.querySelector('.submit');
const checkboxEl = document.querySelector('#agree_checkbox');
buttonEl.addEventListener('click', () => {
    if (!checkboxEl.checked) {
        const errorEl = document.querySelector('.error');
        errorEl.textContent = 'Необходимо согласиться с условиями';
    }
});

// Задание 2
const chooseDestinyEl = document.querySelector('.choose_destiny');
const submitEl = document.querySelector('.submit_neo');
const redPillInputEl = document.querySelector('#red_pill');
chooseDestinyEl.addEventListener('click', (event) => {
    if(event.target.classList.contains('pill')) {
        submitEl.removeAttribute('disabled');
    }
});
submitEl.addEventListener('click', () => {
    if (redPillInputEl.checked) {
        alert('Красные таблетки закончились :(');
    } else {
        alert('Follow the White Rabbit!');
    }
});

// Задание 3
const inputPasswordEl = document.querySelector('input[type="password"]');
console.log(inputPasswordEl);
inputPasswordEl.addEventListener('input', () => {
    if (inputPasswordEl.value.length < 6) {
        inputPasswordEl.style.border = '2px solid red';
    } else {
        inputPasswordEl.style.border = '2px solid green';
    }
    console.log();
});


// Задание 4
const divEl = document.createElement('div');
document.body.appendChild(divEl);
divEl.style.margin = '10px';
const inputEl = document.createElement('input');
inputEl.setAttribute('type', 'text');
inputEl.setAttribute('id', 'text_input');
divEl.appendChild(inputEl);
const hOneEl = document.createElement('h1');
hOneEl.textContent = 'Заголовок';
divEl.appendChild(hOneEl);

inputEl.addEventListener('input', () => {
    hOneEl.textContent = inputEl.value;
    if (inputEl.value.length === 0) {
        hOneEl.textContent = 'Заголовок';
    } 
});