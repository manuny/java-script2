/* Создать поле ввода (пароль)
Кнопка отправить
Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”*/

const form = document.querySelector(".form");
const passwordEl = document.querySelector(".password");
const btnEl = document.querySelector("#submit");
const errorEl = document.querySelector(".error");
const password = "пароль";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (passwordEl.value === password) {
    passwordEl.style.backgroundColor = "green";
  } else if (passwordEl.value === "") {
    errorEl.textContent = "Введите пароль!";
    passwordEl.style.borderColor = "red";
  } else if (passwordEl.value !== password) {
    errorEl.textContent = "пароль не верный!";
    passwordEl.style.borderColor = "red";
  }
});
