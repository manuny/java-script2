/* В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
Добавить кнопку отправить
При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями” */

console.log(agree); // js сам ловит id-шники
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const checkbox = document.getElementById("agree");
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = checkbox.checked
    ? ""
    : "Необходимо согласиться с условиями";
  // if (!checkbox.checked) {
  // errorMessage.textContent = 'Необходимо согласиться с условиями';
  // } else {
  // errorMessage.textContent = '';
  // // По идее, здесь должен быть код для отправки формы.
  // }
});
// document.getElementById('myForm').addEventListener('submit', function(event) {
// event.preventDefault();
// const checkbox = document.getElementById('agree');
// const errorMessage = document.getElementById('error-message');

// if (!checkbox.checked) {
// errorMessage.textContent = 'Необходимо согласиться с условиями';
// } else {
// errorMessage.textContent = '';
// // По идее, здесь должен быть код для отправки формы.
// }
// });
