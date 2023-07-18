/*
Задание 1:
 
1. Дан макет, в котором представлены товары на странице корзины:
https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/shop-(Copy)-(Copy)?node-id=73%3A140
2. Необходимо создать файл data.js, в созданном файле необходимо объявить 
переменную dataProducts, которая будет хранить JSON-данные по подобным товарам. 
3. Самостоятельно заполнить JSON-данные в переменной из второго пункта.
4. Создать вёрстку со стилями по данному в первом пункте макету.
5. Необходимо отобразить на сайте (с помощью javascript), все данные из 
переменной dataProducts.
*/
"use strict";

const dataProductsParsed = JSON.parse(dataProducts);

const catWrapperEl = document.querySelector(".catalog-wrapper");

const cardTemplateEl = document.getElementById("product-card_template");

function fillProductCard(product) {
  const productCard = cardTemplateEl.content.cloneNode(true);
  productCard.querySelector(".img").src = product.img;
  productCard.querySelector(".img").alt = `${product.name} photo`;
  productCard.querySelector(".name").textContent = product.name;
  productCard.querySelector(".price_color").textContent = product.price;
  productCard.querySelector(".color").textContent += product.color;
  productCard.querySelector(".size").textContent += product.size;
  productCard.querySelector("#quantity_index").placeholder = product.quantity;

  const productCardBoxEl = productCard.querySelector(".product-card");
  productCard.querySelector(".close").addEventListener("click", () => {
    productCardBoxEl.remove();
  });

  catWrapperEl.append(productCard);
}

dataProductsParsed.products.forEach((product) => {
  fillProductCard(product);
});
