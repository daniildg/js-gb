const form = document.querySelector(".form");
const list = document.querySelector("ul");

list.addEventListener(
  "click",
  (e) => {
    console.log("В первом UL в фазе захвата");
    const propagationControlMethodName =
      form.elements["propagation-control"].value;
    console.log(propagationControlMethodName);
    if (propagationControlMethodName) {
      e[propagationControlMethodName]();
    }
  },
  true
);

list.addEventListener(
  "click",
  () => {
    console.log("Во втором UL в фазе захвата");
  },
  true
);

list.addEventListener("click", () => {
  console.log("В первом UL в фазе всплытия");
});
Array.from(list.children).forEach((child) => {
  child.addEventListener("click", () => {
    console.log("В каждом LI в фазе всплытия");
  });
});

const checkbox = document.querySelector("input[type=checkbox]");
checkbox.addEventListener("click", (event) => {
  console.log(event.target.checked); // true
  event.preventDefault();
});

const inputEl = document.querySelector(".check");
const formNew = document.querySelector(".new-form");
const errorEl = formNew.querySelector(".error");
inputEl.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target.checked);
});
formNew.addEventListener("submit", function (e) {
  console.log(inputEl.checked ? "enter available" : "Check the Checkbox");
});

const eventOptions = { bubbles: true, cancelable: true };
const eventConst = new Event("click", eventOptions);
eventConst.view = window;
const mouseEvent = new MouseEvent("click", {
  ...eventOptions,
  view: window,
});
document.addEventListener("click", (event) => {
  console.log(event.isTrusted);
});
const button = document.querySelector("button");
button.dispatchEvent(eventConst);
button.dispatchEvent(mouseEvent);
button.click();
