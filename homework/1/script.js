//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
super_linkElement = document.getElementById("super_link");
console.log(super_linkElement);
//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
cart_linkElement = document.querySelectorAll(".card-link");
cart_linkElement.forEach((element) => {
  element.textContent = "ссылка";
});
//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const elems = document.querySelectorAll(".card-body .card-link");
console.log(elems);
//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const element = document.querySelector('[data-number="50"]');
console.log(element);
//5. Выведите содержимое тега title в консоль.
console.log(document.title);
//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const pElem = document.querySelector(".card-title").parentNode;
console.log(pElem);
//7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const pTag = document.createElement("p");
pTag.textContent = "Привет";
document.querySelector(".card").prepend(pTag);
//8. Удалите тег h6 на странице.
document.querySelector("h6").remove();
