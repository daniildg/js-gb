// 1
const blockEl = document.querySelector(".block");
blockEl.innerHTML = `<div class="item">Текст внутри блока</div>`;
blockEl.style.color = "blue";
blockEl.style.border = "solid black";
blockEl.style.backgroundColor = "#f8f8f8";
blockEl.style.padding = "16px";

const blockClasses = blockEl.getAttribute("class");
console.log(blockClasses);

blockEl.setAttribute("class", `${blockClasses} item_1`);

blockEl.classList.add("item_2");

// 2
const textClassEl = document.querySelector(".text");
console.log(textClassEl);
console.log(textClassEl.previousElementSibling);
console.log(textClassEl.parentElement);
console.log(textClassEl.parentElement.previousElementSibling);
console.log(textClassEl.parentElement.parentElement);

// 3
const headingTwo = document.querySelector("h2");
for (
  let el = headingTwo.parentElement;
  el.parentElement;
  el = el.parentElement
) {
  console.log(el);
}

// 4
const buttonEl = document.querySelector(".btn");
const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
const headingTwoMessage = document.createElement("h2");
headingTwoMessage.textContent = "вы не заполнили поле ввода.";

buttonEl.addEventListener("click", () => {
  if (inputEl.value === "") {
    formEl.after(headingTwoMessage);
    inputEl.style.border = "1px solid red";
  } else {
    headingTwoMessage.remove();
    inputEl.style.removeProperty("border");
  }
});
