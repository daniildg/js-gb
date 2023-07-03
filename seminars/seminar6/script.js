const divEl = document.querySelector("#block");
console.log(divEl);

const wwwEl = document.querySelector(".www");
console.log(wwwEl);

const linkEl = document.querySelector(".link");
linkEl.textContent = "link text js";
linkEl.href = "https://developer.mozilla.org/ru/";
linkEl.innerHTML = "<span>link text js + html</span>";

const imgEl = document.querySelector(".photo");
imgEl.src =
  "https://www.studprosvet.ru/upload/004/u497/d/1/javascript-dlja-detei-cover-normal.png";
imgEl.alt = "JavaScipt";

const paragraphEl = document.createElement("p");
paragraphEl.textContent = "Новый текстовый элемент";
const contentEl = document.querySelector(".content");
contentEl.appendChild(paragraphEl);
paragraphEl.remove();

const buttonEl = document.createElement("button");
buttonEl.textContent = "Нажать";
const contentNextEl = document.querySelector(".content-next");
contentNextEl.prepend(buttonEl);
let count = 0;
buttonEl.addEventListener("click", () => {
  count++;
  console.log(`На кнопку нажали ${count} раз`);
});

const buttonSendEl = document.createElement("button");
buttonSendEl.textContent = "Отправить";
const contentThirdEl = document.querySelector(".content-third");
contentThirdEl.prepend(buttonSendEl);
buttonSendEl.addEventListener("click", () => {
  buttonSendEl.textContent = "Текст отправлен";
  buttonSendEl.disabled = "true";
});
