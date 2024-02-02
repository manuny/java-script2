/* Создать в html список состоящий из 3-х произвольных элементов li
Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
Создать кнопку, которая будет удалять первый элемент из созданного списка
Создать кнопку, при клике на которую ей добавляется класс “click” */

const menuELement = document.querySelector(".menu");
const divButton1 = document.querySelector(".button1");
const divButton2 = document.querySelector(".button2");
const divButton3 = document.querySelector(".button3");

divButton1.addEventListener("click", function (e) {
  const menuEl = document.createElement("li");
  menuEl.textContent = "новый элемент списка";
  menuELement.appendChild(menuEl);
  menuEl.classList.add("item");
});

divButton2.addEventListener("click", function (e) {
  const itemEl = document.querySelector(".item");
  itemEl.remove();
});
divButton3.addEventListener("click", function (e) {
  divButton3.classList.add("click");
});
