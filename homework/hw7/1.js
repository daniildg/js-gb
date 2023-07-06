"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach, querySelectorAll и
свойство classList у элементов.
*/

const dropdownItemEls = document.querySelectorAll(".dropdown-item");
dropdownItemEls.forEach((element) => {
  element.classList.add("super-dropdown");
});

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
*/

const btnEl = document.querySelector(".btn");
btnEl.classList.toggle("btn-secondary");

/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
*/

const menuEl = document.querySelector(".menu");
menuEl.classList.remove("dropdown-menu");

/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
*/

const divDropdownEl = document.querySelector("div.dropdown");
divDropdownEl.insertAdjacentHTML("afterend", '<a href="#">link</a>');

/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/

const superDropdownEl = document.querySelector("#dropdownMenuButton");
superDropdownEl.id = "superDropdown";

/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/

const dataDdEl = document.querySelector(
  "[aria-labelledby='dropdownMenuButton']"
);
dataDdEl.dataset.dd = 3;

/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/

const dropdownToggleEl = document.querySelector(".dropdown-toggle");
dropdownToggleEl.removeAttribute("type");
