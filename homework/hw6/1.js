"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/

const idSuperLink = document.getElementById("super_link");
console.log(idSuperLink);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/

const cardLinkEls = document.querySelectorAll(".card-link");
cardLinkEls.forEach((cardLinkEl) => {
  cardLinkEl.textContent = "ссылка";
});

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/

const cardLinkElsInCardBody =
  idSuperLink.parentElement.querySelectorAll(".card-link");
console.log(cardLinkElsInCardBody);

/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/

const dataNumberFifty = document.querySelector('[data-number="50"]');
console.log(dataNumberFifty);

/*
5. Выведите содержимое title страницы в консоль.
*/

const title = document.querySelector("title");
console.log(title.textContent);

/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/

const cardTitle = document.querySelector(".card-title");
const cardTitleParent = cardTitle.parentElement;
console.log(cardTitleParent);

/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/

const paragraph = document.createElement("p");
paragraph.textContent = "Привет";
const cardClassEl = document.querySelector(".card");
cardClassEl.prepend(paragraph);

/*
8. Удалите тег h6 на странице.
*/

const headingSix = document.querySelector("h6");
headingSix.remove();
