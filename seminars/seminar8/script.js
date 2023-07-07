/*
Задание 1:
 
1. После того как все ресурсы на странице были загружены, необходимо вывести 
сообщение в консоль "Все ресурсы загружены".
*/
window.addEventListener("load", () => {
  console.log("все ресурсы загружены");
});

// 2. После того как все теги были созданы на странице, необходимо вывести
// сообщение: “Все теги созданы”.

document.addEventListener("DOMContentLoaded", () => {
  console.log("все теги созданы");
});

// 3. Добавить событие onclick для тега button в html, которое выводит в консоль
// текст “событие onclick”.

const buttonEl = document.querySelector("button");
buttonEl.onclick = () => {
  console.log("событие onclick");
};

// 4. Добавить событие addEventListener для тега button в html, которое выводит
// в консоль текст “событие addEventListener”.

buttonEl.addEventListener("click", () => {
  console.log("событие addEventListener");
});

// Задание 2:

// Необходимо сделать так, чтобы при клике на какую-либо кнопку (их может быть
// и больше), выводилось в консоль сообщение, в котором было написано, сколько раз мы кликнули на каждую из кнопок. Пример сообщения:

// Количество кликов по кнопке 1 равно 2;
// Количество кликов по кнопке 3 равно 4;

// Данный пример означает, что по кнопке 1 мы кликнули два раза, по кнопке 3 кликов было четыре, а по кнопке два мы ни разу не кликнули.
// Сообщения должны выводиться в порядке увеличения числа у кнопки.

const divWrapperEl = document.querySelector(".wrapper");
const obj = {};
divWrapperEl.addEventListener("click", (event) => {
  if (!event.target.classList.contains(`btn`)) {
    return;
  }

  if (obj[event.target.dataset.name] === undefined) {
    obj[event.target.dataset.name] = 1;
  } else {
    obj[event.target.dataset.name]++;
  }

  let message = ``;
  for (const key in obj) {
    message = `${message}Количество кликов по кнопке ${key} = ${obj[key]}\n`;
  }
  console.log(message);
});

// Задание 3:

// 1. При клике на кнопку 1, должен создаться тег h1 в начале тега body, с
// текстом "Новый заголовок".

// 2. При клике на кнопку 2, заголовок из первого пункта должен быть удален.
// 3. При наведении мыши на кнопку 3, в консоль должен выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”.

const btnEls = document.querySelectorAll(".btn1");
const firstBtnEl = document.querySelector(".btn1");
const hOneEl = document.createElement("h1");
hOneEl.textContent = "New Tagline";
firstBtnEl.addEventListener("click", () => {
  document.body.prepend(hOneEl);
});
btnEls[1].addEventListener("click", () => {
  hOneEl.remove();
});
btnEls[2].addEventListener("mouseover", () => {
  console.log("вы навели на данную кнопку");
});
btnEls[2].addEventListener("mouseout", () => {
  console.log("Наведения на кнопку больше нет");
});

// Задание 4:

// 1. При клике на кнопку "Добавить", необходимо добавить новый элемент li, в конец списка с текстом “новый элемент списка”.
// 2. При клике на кнопку "Удалить", необходимо удалить первый элемент из списка.

const addBtnEl = document.querySelector(".add_btn");
const removeBtnEl = document.querySelector(".delete_btn");
const ulEl = document.querySelector("ul");
const liEl = document.createElement("li");
liEl.textContent = "Новый элемент списка";
addBtnEl.addEventListener("click", () => {
  const liEl = document.createElement("li");
  liEl.textContent = "Новый элемент списка";
  ulEl.appendChild(liEl);
});
removeBtnEl.addEventListener("click", () => {
  if (ulEl.firstElementChild) {
    ulEl.firstElementChild.remove();
  } else {
    alert("элементов нет!");
  }
});
