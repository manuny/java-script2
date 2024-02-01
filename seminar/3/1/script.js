/*В html создать кнопку button
После загрузки страницы вывести в консоль текст “страница загрузилась”
Добавить событие onclick которое выводит в консоль текст “событие onclick”
Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”*/

window.addEventListener("load", () => {
  console.log("страница загрузилась");
});

const buttonEl = document.querySelector(".button");

buttonEl.onclick = function () {
  console.log("событие onclick");
};

buttonEl.addEventListener("click", function (e) {
  console.log("событие addEventListener");
});
