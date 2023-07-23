const objectGoods = JSON.parse(json).goods;

const featuredItemContainer = document.querySelector(".featuredItems");

const createNewItem = (item) => {
  const featuredItemClone = document
    .querySelector(".featuredItem")
    .cloneNode(true);
  featuredItemClone.querySelector("img").src = item.img;
  featuredItemClone.querySelector(".featuredName").textContent = item.name;
  featuredItemClone.querySelector(".featuredText").textContent =
    item.description;
  featuredItemClone.querySelector(".featuredPrice").textContent = item.price;
  return featuredItemClone;
};

objectGoods.forEach((item) => {
  featuredItemContainer.append(createNewItem(item));
});
