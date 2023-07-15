// Задание 1:

// 1. Установить расширение JSON viewer в браузере.
// 2. Необходимо найти бесплатный api в интернете, из которого мы можем получить
// массив с данными, текстом, картинками.
// 3. Необходимо скопировать json ответ из данного api, и вставить полученную
// строку в data.js файл в переменную.
// 4. Создать в html `<div class="content"></div>`.
// 5. Подключить данный файл data.js к странице с нашими html и js.
// 6. Необходимо вывести на страницу (в div, который создали в 4 пункте) элементы
// из json-массива (который создавали в 5 пункте). Данные должны быть выведены
// оформленно, в виде корректного html.

const contentEl = document.querySelector(".content");

const parsedData = JSON.parse(data);

const tempEl = document.getElementById("character__template");

function renderCharacter(person) {
  const cloneEl = tempEl.content.cloneNode(true);
  const personPhotoEl = cloneEl.querySelector(".photo");

  cloneEl.querySelector(`.name`).textContent = person.name;
  personPhotoEl.src = person.image;
  personPhotoEl.alt = `${person.name} photo`;
  cloneEl.querySelector(
    `.desc`
  ).textContent = `status: ${person.status}, species: ${person.species}, gender: ${person.gender}`;
  contentEl.append(cloneEl);
}

parsedData.results.forEach((person) => {
  renderCharacter(person);
});

// function renderCharacters(persons) {
//   let content = ``;
//   for (let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     content += `
//     <div class="character">
//       <h3 class="name">${person.name}</h3>
//       <img src=${person.image} alt="photo ${person.name}" class="photo">
//       <p class="desc">Status: ${person.status} species ${person.species} gender ${person.gender}</p>
//     </div>`;
//   }
//   contentEl.innerHTML = content;
// }

// renderCharacters(parsedData.results);

// function renderCharacter(character) {
//   const characterCardEl = document.createElement("div");
//   characterCardEl.classList.add("character");
//   contentEl.append(characterCardEl);

//   const nameEl = document.createElement("h3");
//   nameEl.classList.add("name");
//   characterCardEl.append(nameEl);
//   nameEl.textContent = character.name;

//   const imgEl = document.createElement("img");
//   imgEl.classList.add("photo");
//   characterCardEl.append(imgEl);
//   imgEl.src = character.image;
//   imgEl.alt = `${character.name} photo`;

//   const descEl = document.createElement("p");
//   descEl.classList.add("desc");
//   characterCardEl.append(descEl);
//   descEl.textContent = `Status: ${character.status} species ${character.species} gender ${character.gender}`;
// }

// parsedData.results.forEach((element) => {
//   renderCharacter(element);
// });
