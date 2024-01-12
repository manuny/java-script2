/* <div id="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */

const blok = document.querySelector("#block"); //("#blok p:first-child");
const firstChild = blok.children[0];
console.log(firstChild);

const tex = document.querySelector(".www");
console.log(tex);

/* Дан тег <a class="link" href="#">link text html</a>
Вам необходимо поменять текст внутри ссылки на “link text js”
Заменить href, на значение https://developer.mozilla.org/ru/ 
Дан тег <img class="photo" src="" alt=""> 
Вам необходимо с помощью js поменять значение src на любое изображение из интернета
*/
const lin = document.querySelector(".link");
lin.textContent = "link text js";
lin.href = "https://developer.mozilla.org/ru";

const phot = document.querySelector(".photo");
phot.src =
  "/seminar/1/img/1662431382_14-kartinkof-club-p-novie-i-krasivie-kartinki-puma-20.jpg";

/*Дан тег <div class="content"></div> 
Создайте новый элемент p
Добавьте в него текст “Новый текстовый элемент”
Добавьте созданный элемент внутри <div class="content"></div>
Удалите добавленный узел */

const conten = document.querySelector(".content");
const paragraphElement = document.createElement("p");
paragraphElement.textContent = "Новый текстовый элемент";
conten.appendChild(paragraphElement);
paragraphElement.remove();
