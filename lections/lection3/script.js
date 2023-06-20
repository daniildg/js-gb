function helloName(name) {
  console.log(name);
}

helloName('Dan');

/*
let count = 5;
function counter() {
  return count++;
}
counter();
console.log(count);
*/

/*
let age = Number.parseInt(prompt('How old are you?'));

const lvlUpAge = () => age + 5;

alert(`In 5 years you will be ${lvlUpAge()} years old`);
*/

/*
function hello() {
  console.log('Hello Function');
}
hello();
*/

/*
const sum = (paramOne, paramTwo) => {
  return paramOne + paramTwo;
}
console.log(sum(2, 5));
*/

/*
const userMoney = Number.parseInt(prompt('What is your salary?'));
const salary = money => (money * 0.87) * 0.75; //стрелочная функция
let moneyMonth = salary(userMoney);
console.log(`Available for spending ${salary(userMoney)}`);
console.log(`Food spending recommended equal or less than ${moneyMonth * 0.3}`);
*/

/*
function sayHello() {
  alert('Hi!');
  alert('Pushed a button');
}
*/


function askQuestion(answer, question) {
  const userAnswer = prompt(question);
  if (userAnswer.toLowerCase() === answer) {
    console.log('Угадал');
  } else {
    console.log('Не угадал!');
  }
}

function clickPuzzle() {
  askQuestion('елка', 'Зимой и летом одним цветом');
  askQuestion('лук', 'Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает')
}