const data = JSON.parse(dataInfo);

const contentBoxEl = document.querySelector(".content");

data.forEach(function (item) {
  const productEl = document.createElement("div");
  productEl.classList.add("product");

  const imgEl = document.createElement("img");
  imgEl.classList.add("product__img");
  imgEl.src = thumbnail;
  imgEl.alt = "photo";

  const contentEl = document.createElement("div");
  contentEl.classList.add("product__content");

  const textEl = document.createElement("p");
  textEl.classList.add("product__text");
  textEl.textContent = description;

  productEl.append(contentBoxEl);
  imgEl.append(productEl);
  contentEl.append(imgEl);
  textEl.append(contentEl);
});
