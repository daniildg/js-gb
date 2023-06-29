"use strict";

/*
Необязательное задание.
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

let stringMount = 'x';
console.log(stringMount);
let mountLength = 19;
for (let i = 0; i < mountLength; i++) {
  stringMount += 'x';
  console.log(stringMount);
}
