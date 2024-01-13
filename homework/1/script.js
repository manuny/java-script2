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

//5. Выведите содержимое тега title в консоль.

//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

//7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

//8. Удалите тег h6 на странице.
