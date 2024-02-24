const data = JSON.parse(products);

const productBoxEl = document.querySelector(".product-box__content");

data.forEach(({ imgProduct, name, titel, price }) => {
  const productEl = document.createElement("div");
  productEl.className = "product";
  productBoxEl.append(productEl);

  const productImageEl = document.createElement("img");
  productImageEl.classList.add = "product__img";
  productImageEl.setAttribute("src", imgProduct);
  productImageEl.setAttribute("alt", "foto");
  productBoxEl.append(productImageEl);

  const productContEl = document.createElement("div");
  productEl.className = "product__content";
  productBoxEl.append(productContEl);

  const linkEl = document.createElement("a");
  linkEl.classList.add = "product__heading";
  linkEl.href = "#";
  linkEl.textContent = name;
  productContEl.append(linkEl);

  const tittelEl = document.createElement("p");
  tittelEl.classList.add = "product__text";
  tittelEl.textContent = titel;
  productContEl.append(tittelEl);

  const praceEl = document.createElement("p");
  praceEl.classList.add = "product__text";
  praceEl.textContent = price;
  productContEl.append(praceEl);
});
