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
