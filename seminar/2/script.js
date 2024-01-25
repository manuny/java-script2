/*
<div class="block">
</div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute)*/

const block = document.querySelector(".block");
const divEl = document.createElement("div");
divEl.setAttribute("class", "item item_1");
block.appendChild(divEl);
const tittelEl = document.createElement("p");
tittelEl.textContent = "Элемент внтури";
divEl.appendChild(tittelEl);
divEl.style.color = "blue";
divEl.style.border = "1px solid black";
divEl.style.backgroundColor = "#f8f8f8";

/*Дан код
Необходимо с помощью querySelector найти параграф с классом text
Вывести в консоль соседний элемент h2
Вывести в консоль родительский элемент content
Вывести в консоль картинку
Вывести в консоль родительский элемент elem*/
const textElement = document.querySelector(".text");
console.log(textElement);
console.log(textElement.previousElementSibling);
console.log(textElement.parentElement);
console.log(textElement.parentElement.previousElementSibling);
console.log(textElement.parentElement.parentElement);
/*<div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей*/
const subtitleElement = document.querySelector(".subtitle");
let h2Element = subtitleElement;
while (h2Element.parentElement !== null) {
  h2Element = h2Element.parentElement;
  console.log(h2Element);
}
/*<form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным*/
const formEl = document.querySelector(".form");
const buttonEl = document.querySelector(".btn");
const inputEl = document.querySelector(".textIn");
console.log(inputEl.textContent);

buttonEl.onclick = function () {
  if (inputEl.value === "") {
    const attantionEl = document.createElement("h2");
    attantionEl.textContent = "Вы не заполнили поле ввода!";
    formEl.appendChild(attantionEl);
    inputEl.style.borderColor = "red";
  }
};
