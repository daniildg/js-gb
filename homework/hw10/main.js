const dataList = JSON.parse(charData);
const appEl = document.querySelector(".app");
const templateEl = document.getElementById("character__template");

function renderCharCard(character) {
  const nodeEl = templateEl.content.cloneNode(true);

  const charImgEl = nodeEl.querySelector(".character__img");
  charImgEl.src = character.image;
  charImgEl.alt = `${character.name}`;
  nodeEl.querySelector(".character__name").textContent = character.character;
  nodeEl.querySelector(
    ".character__desc"
  ).textContent = `Item ${character.name} (${character.type}) from the game '${character.gameSeries}'`;

  appEl.append(nodeEl);
}

dataList.amiibo.forEach((character) => {
  renderCharCard(character);
});
