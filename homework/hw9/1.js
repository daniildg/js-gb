"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/

const inputFromEl = document.body.querySelector("#from");
const spanEl = document.body.querySelector("span");
inputFromEl.addEventListener("input", () => {
  spanEl.innerText = inputFromEl.value;
});

/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate__animated и animate__fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/

const messageBtnEl = document.body.querySelector(".messageBtn");
const messageEl = document.body.querySelector(".message");
messageBtnEl.addEventListener("click", () => {
  messageEl.classList.add("animate__animated", "animate__fadeInLeftBig");
  messageEl.style.visibility = "visible";
});

/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const formEl = document.body.querySelector("form");
const inputFirstEl = formEl.querySelector("input");
const inputSecondEl = formEl.querySelector("select");
const buttonEl = formEl.querySelector("button");
buttonEl.addEventListener("click", (event) => {
  if (!inputFirstEl.value || !inputSecondEl.value) {
    event.preventDefault();
    const error = !inputFirstEl.value
      ? inputFirstEl.classList.add("error")
      : inputSecondEl.classList.add("error");
  }

  if (!inputFirstEl.value && !inputSecondEl.value) {
    inputFirstEl.classList.add("error");
    inputSecondEl.classList.add("error");
  }
});

formEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("form-control")) {
    const error = !event.target.value
      ? event.target.classList.add("error")
      : event.target.classList.remove("error");
  }
});

formEl.addEventListener("input", (event) => {
  const error = !event.target.value
    ? event.target.classList.add("error")
    : event.target.classList.remove("error");
});
