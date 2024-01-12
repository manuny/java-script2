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
