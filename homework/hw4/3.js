"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const array = [];
const length = 5;
let randomNum = (max, min) => Math.floor(Math.random() * (max - min) + min);
for (let i = 0; i < length; i++) {
  array[i] = randomNum(0, 10);
}
console.log(`Массив - [${array}]`);

let arraySum = 0;
for (let i = 0; i < length; i++) {
  arraySum += array[i];
}
console.log(`Сумма элементов массива - ${arraySum}`);

let minNumInArray = array[0];
for (let i = 1; i < array.length; i++) {
  if (minNumInArray > array[i]) {
    minNumInArray = array[i];
  }
}
console.log(`Минимальное значение в массиве - ${minNumInArray}`);

const newArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 3) {
    newArray.push(i);
  }
}
console.log(`Новый массив - [${newArray}]`);
