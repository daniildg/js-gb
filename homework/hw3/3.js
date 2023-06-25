"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const firstUserInput = +prompt("Введите первое число", 1);
const secondUserInput = +prompt("Введите второе число", 1);
const thirdUserInput = +prompt("Введите третье число", 1);
function getMaxNumber(numOne, numTwo, numThree) {
  if (numOne > numTwo && numOne > numThree) {
    console.log(`Максимальное значение среди чисел ${numOne}, ${numTwo}, ${numThree}
     равно ${numOne}`);
  } else if (numTwo > numOne && numTwo > numThree) {
    console.log(`Максимальное значение среди чисел ${numOne}, ${numTwo}, ${numThree}
     равно ${numTwo}`);
  } else if (numThree > numOne && numThree > numTwo) {
    console.log(`Максимальное значение среди чисел ${numOne}, ${numTwo}, ${numThree}
     равно ${numThree}`);
  } else {
    console.log("Числа равны");
  }
}
getMaxNumber(firstUserInput, secondUserInput, thirdUserInput);
