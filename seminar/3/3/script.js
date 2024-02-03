/* Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
Создать вторую кнопку, которая будет удалять созданный заголовок h1
Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”*/

const button1El = document.querySelector(".button1");
const buttonsEl = document.querySelector(".buttons");
const button2El = document.querySelector(".button2");
const button3El = document.querySelector(".button3");

button1El.addEventListener("click", function (e) {
  const tittelEl = document.createElement("h1");
  tittelEl.textContent = "Новый заголовок";
  buttonsEl.appendChild(tittelEl);

  button2El.addEventListener("click", function (e) {
    tittelEl.remove();
  });
});

button3El.addEventListener("mouseover", function (e) {
  console.log("вы навели на данную кнопку");
});
button3El.addEventListener("mouseleave", function (e) {
  console.log("Наведения на кнопку больше нет");
});
