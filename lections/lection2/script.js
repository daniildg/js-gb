// let userAnswer = prompt('Зимой и летом одним цветом');

/*if (userAnswer === 'елка') {
  alert('Молодец!');
} else {
  alert('Не угадал!');
}*/

// (условие) ? да : нет - тернарный оператор

// alert((userAnswer.toLowerCase() === 'елка') ? 'Молодец!' : 'Не угадал!');

/*if (userAnswer === '') {
  console.log('Empty');
} else {
  if (userAnswer === 'елка') {
    alert('Молодец!');
  } else {
    alert('Не угадал!');
  }
}*/

/*if (userAnswer === '') {
  alert('Empty');
} else if (userAnswer === 'елка') {
  alert('Молодец!');
} else {
  alert('Не угадал!');
}*/

// console.log(userAnswer);


// Проверка на пароль

/*let pass = prompt('Введите пароль');
pass = Number(pass);
pass = String(pass);
if (pass === 123) {
  alert('Go');
} else {
  alert('Stop');
}*/

let pass = Number(prompt('Введите пароль'));
alert((pass === 123) ? 'Go' : 'Stop');