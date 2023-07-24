const cart = {};
const productsObject = getProductsObject();

const cartBoxEl = document.querySelector('.cart_wrapper');
const cartListEl = cartBoxEl.querySelector('.cart_list');
const cartValue = cartBoxEl.querySelector('.cart_totalvalue');
const productCounter = document.querySelector('.cartIconWrap span');

/*-----------функции-----------*/
function addProductToCart(id) {
  if (!(id in cart)) {
    cart[id] = {
      id: id,
      name: productsObject[id].name,
      count: 0,
      price: productsObject[id].price,
    };
  }
  cart[id].count++;
}

function removeProductFromCart(id) {
  if (cart[id].count <= 1) {
    delete cart[id];
  } else {
    cart[id].count--;
  }
}

function getTotalProductsCount() {
  return Object.values(cart).reduce((acc, product) => acc + product.count, 0);
}

function getTotalCartPrice() {
  return Object.values(cart).reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );
}

function getCartProductHTML(product) {
  return `
    <div class="cart_content" data-id="${product.id}">
      <div>${product.name}</div>
      <div>
        <span class="productCount">${product.count}</span> шт.
      </div>
      <div>${product.price} ₽</div>
      <div>
        <span class="productTotal">
          ${(product.price * product.count).toFixed(2)} ₽
        </span>
      </div>
      <div><button class="productRemove">-</button></div>
    </div>
  `;
}

function renderProductInCart() {
  cartListEl.innerHTML = Object.values(cart).reduce((acc, product) => acc + getCartProductHTML(product), "");
  cartValue.textContent = getTotalCartPrice().toFixed(2);
  productCounter.innerHTML = getTotalProductsCount().toString();
}
/*-----------------------------*/

document.querySelector('.cartIconWrap').addEventListener('click', () => {
  cartBoxEl.classList.toggle('hidden');
});

document.querySelector('.featuredItems').addEventListener('click', (event) => {
  const addToCartEl = event.target.closest(".addToCart");
  if (!addToCartEl) {
    return;
  }
  addProductToCart(addToCartEl.dataset.id);
  renderProductInCart();
});

cartBoxEl.addEventListener('click', event => {
  if (!event.target.classList.contains("productRemove")) {
    return;
  }
  removeProductFromCart(event.target.closest(".cart_content").dataset.id);
  renderProductInCart();
});