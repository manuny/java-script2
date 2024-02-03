/*Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”*/

const contentELement = document.querySelector(".content");

const buttonEl = document.createElement("button");
buttonEl.textContent = "Отправить";
contentELement.appendChild(buttonEl);
buttonEl.classList.add("but");

buttonEl.addEventListener("click", function (e) {
  buttonEl.textContent = "Текст отправлен";
});
