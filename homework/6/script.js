const data = JSON.parse(products);

const productBoxEl = document.querySelector(".product-box__content");

data.forEach(({ imgProduct, name, titel, price }) => {
  const productEl = document.createElement("div");
  productEl.className = "product";
  productBoxEl.append(productEl);

  const productImageEl = document.createElement("img");
  productImageEl.className = "product__img";
  productImageEl.setAttribute("src", imgProduct);
  productImageEl.setAttribute("alt", "foto");
  productEl.append(productImageEl);

  const productContEl = document.createElement("div");
  productEl.classList.add = "product__content";
  productBoxEl.append(productContEl);

  const linkEl = document.createElement("a");
  linkEl.className = "product__heading";
  linkEl.href = "#";
  linkEl.textContent = name;
  productEl.append(linkEl);

  const tittelEl = document.createElement("p");
  tittelEl.className = "product__text";
  tittelEl.textContent = titel;
  productEl.append(tittelEl);

  const praceEl = document.createElement("p");
  praceEl.className = "product__price";
  praceEl.textContent = price;
  productEl.append(praceEl);
});
//создаем раздел Cart Items и добавляем в document по нажатию на кнопку Add to cart
function createCartItemsSection() {
  const presenceOfSectionCartItems = document.querySelector(".product__img");
  if (presenceOfSectionCartItems) {
    return;
  } else {
    const cartItemsBox = document.createElement("section");
    cartItemsBox.classList.add("cart-content", "center");

    const sectionHeading = document.createElement("h2");
    sectionHeading.classList.add("cart-content__title");
    sectionHeading.textContent = "Cart Items";
    cartItemsBox.append(sectionHeading);

    const itemsWrap = document.createElement("div");
    itemsWrap.classList.add("cart-content__items");
    cartItemsBox.append(itemsWrap);

    const footerAdvantagesSection = document.querySelector(".footer_box");
    footerAdvantagesSection.after(cartItemsBox);
    return itemsWrap;
  }
}
const productImageEl = document.querySelector(".product__img");
productImageEl.addEventListener("click", createCartItemsSection);

//добавляем товар в секцию Cart Items
function addNewProductCart(e) {
  JSON.parse(products).forEach((item) => {
    const button = e.target.closest(".product");
    if (button.id == item.id) {
      //контейнер для карточек
      const itemsWrap = document.querySelector(".cart-content__items");

      //шаблон карточки товара
      const productCard = document.createElement("div");
      productCard.classList.add("cart-content__item");
      itemsWrap.append(productCard);

      const productImage = document.createElement("img");
      productImage.classList.add("cart-content__img");
      productImage.src = item.imgProduct;
      productCard.append(productImage);

      const productCardDescription = document.createElement("div");
      productCardDescription.classList.add("item__description");
      productCard.append(productCardDescription);

      const productCardTop = document.createElement("div");
      productCardTop.classList.add("item__top");
      productCardDescription.append(productCardTop);

      const productCardLink = document.createElement("a");
      productCardLink.classList.add("item__heading");
      productCardLink.textContent = item.name;
      productCardTop.append(productCardLink);

      const productCardProperties = document.createElement("div");
      productCardProperties.classList.add("item__properties");
      productCardDescription.append(productCardProperties);

      const productCardPrice = document.createElement("div");
      productCardPrice.classList.add("item__property_price");
      productCardPrice.textContent = "price: ";
      productCardProperties.append(productCardPrice);

      const productCardSpan = document.createElement("span");
      productCardSpan.classList.add("item__property_price-colorful");
      productCardSpan.textContent = item.price;
      productCardPrice.append(productCardSpan);

      const productCardColor = document.createElement("div");
      productCardColor.classList.add("item__property_color");
      productCardColor.textContent = `color: ${item.color}`;
      productCardProperties.append(productCardColor);

      const productCardSize = document.createElement("div");
      productCardSize.classList.add("item__property_size");
      productCardSize.textContent = "size: " + item.size;
      productCardProperties.append(productCardSize);

      const productCardCrossBtn = document.createElement("button");
      productCardCrossBtn.classList.add("item__cross-button");
      productCard.append(productCardCrossBtn);

      const productCardCrossBtnSvg = document.createElementNS("img");
      productCardCrossBtnSvg.src = "vektor";

      productCardCrossBtnSvg.setAttribute("width", "18");
      productCardCrossBtnSvg.setAttribute("height", "18");
      productCardCrossBtnSvg.setAttribute("viewBox", "0 0 18 18");
      productCardCrossBtnSvg.setAttribute("fill", "none");

      productCardCrossBtn.append(productCardCrossBtnSvg);
    }
  });
}
productImageEl.addEventListener("click", addNewProductCart);

//удяляем товар из секции Cart Items
function removeProductFromCart() {
  let counter = [];
  const itemsWrap = document.querySelector(".cart-content__items");
  if (itemsWrap.innerHTML !== "") {
    counter = itemsWrap.children;
    itemsWrap.addEventListener("click", function (event) {
      const target = event.target.closest(".item__cross-button");
      const productCard = event.target.closest(".cart-content__item");
      if (target) {
        productCard.remove();
        --counter.length;
        console.log(counter.length);
        if (counter.length === 0) {
          console.log(`корзина пуста`);
          const sectionCartItems = document.querySelector(".cart-content");
          document.addEventListener("click", function () {
            sectionCartItems.remove();
          });
        }
      }
    });
  }
}
productImageEl.addEventListener("click", removeProductFromCart);
