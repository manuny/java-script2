/* Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
*/

const inputEl = document.querySelector(".input");
const titelEl = document.querySelector(".titel");

inputEl.addEventListener("input", function (e) {
  titelEl.textContent = e.target.value;
});
