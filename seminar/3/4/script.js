/* Создать в html список состоящий из 3-х произвольных элементов li
Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
Создать кнопку, которая будет удалять первый элемент из созданного списка
Создать кнопку, при клике на которую ей добавляется класс “click” */

const menuELement = document.querySelector(".menu");
const divButton = document.querySelector(".button");

divButton.addEventListener("click", function (e) {
  const menuEl = document.createElement("li");
  menuEl.textContent = "новый элемент списка";
  menuELement.appendChild(menuEl);
});
