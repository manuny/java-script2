const data = JSON.parse(dataInfo);

const contentBoxEl = document.querySelector(".content");

data.forEach(({ imgProduct, title, description, price }) => {
  const productEl = document.createElement("div");
  productEl.classList.add("product");
  contentBoxEl.appendChild(productEl);

  const imgEl = document.createElement("img");
  imgEl.classList.add("product__img");
  imgEl.src = imgProduct;
  productEl.appendChild(imgEl);

  const productWrap = document.createElement("div");
  productWrap.classList.add("product__wrap");
  productEl.appendChild(productWrap);

  const productName = document.createElement("h2");
  productName.textContent = title;
  productWrap.appendChild(productName);

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = description;
  productWrap.appendChild(descriptionEl);

  const productPrice = document.createElement("p");
  productPrice.textContent = price;
  productWrap.appendChild(productPrice);
});
