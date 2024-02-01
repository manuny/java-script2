/*Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
*/
const divButton = document.querySelector(".btn");
divButton.addEventListener("click", function (e) {
  console.log(e.target);
});
const btn4 = document.querySelector(".button4");
let counter = 1;
btn4.addEventListener("click", function (e) {
  if (counter === 2 || counter === 3 || counter === 4) {
    console.log(`вы нажали ${counter} раза`);
  } else {
    console.log(`вы нажали ${counter} раз`);
  }
  counter++;
});
const btn5 = document.querySelector(".button5");
btn5.addEventListener("click", function (e) {
  btn5.textContent = "Вы нажали на эту кнопку";
});
