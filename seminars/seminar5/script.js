// Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
/*
const daysOfTheWeek = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
};
alert(daysOfTheWeek[2]);
*/
// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
// 4. Удалите свойство surname.
/*
const user = {
  name: "Daniil",
  surname: "Grishin",
  age: 26,
  middleName: prompt("Введите отчество"),
};
console.log(
  `Имя и Фамилия ${user.name} ${user.surname}, возраст - ${user.age} лет`
);
delete user.surname;
*/
// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
/*
const daysName = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const daysNumber = [1, 2, 3, 4, 5, 6, 7];
*/
// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.
/*
const weekDays = {};
for (let i = 0; i < daysName.length; i++) {
  // console.log(`${daysName[i]}: ${daysNumber[i]}`);
  weekDays[daysName[i]] = daysNumber[i];
}
console.log(weekDays);

console.log(Object.keys(weekDays));

const keys = Object.keys(weekDays);
console.log(keys.sort());
for (let i = 0; i < keys.length; i++) {
  console.log(weekDays[keys[i]]);
}
*/
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.
/*
const object = { x: 1, y: 2, z: 3 };
for (const key in object) {
  object[key] **= 2;
}
console.log(object);
*/

// Задание 3:

// ```
// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// }
// ```

// Найдите сумму всех чисел, приведенного объекта.
/*
const obj = {
  pokey1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  pokey2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  pokey3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

let sumObj = 0;
for (const key in obj) {
  const innerObj = obj[key];
  for (const key in innerObj) {
    sumObj += innerObj[key];
  }
}
console.log(sumObj);
*/

// Задание 4:

// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо сообщить ему об этом и
// подсказать.
// Если ответил неверно во второй раз, то в консоль выводится текст:
// “вы проиграли”.

const riddle = {
  question: "Зимой и летом одним цветом",
  answer: "елка",
  hint: "обязательный гость на новый год",
  askQuestion() {
    let answer = prompt(this.question).toLowerCase();
    if (answer === this.answer) {
      alert();
    } else {
      alert();
      answer = prompt(this.question).toLowerCase();
      if (answer === this.answer) {
        alert();
      } else {
        alert();
      }
    }
  },
};
