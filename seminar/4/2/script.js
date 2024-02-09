/* В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
Кнопка отправить
Если выбран чай, необходимо вывести сообщение “Чай закончился”
Если выбран кофе, необходимо вывести соообщение “кофе закончился”*/

const form = document.querySelector(".form");
const btnTea = document.querySelector("#tea");
const btnCoffee = document.querySelector("#coffe");
const btnEl = document.querySelector("#submit");
const massege = document.querySelector(".messenge");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (btnTea.checked) {
    massege.textContent = "Чай закончился";
  }
  if (btnCoffee.checked) {
    massege.textContent = "Кофе закончился";
  }
});
