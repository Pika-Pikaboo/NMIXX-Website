const lily = document.getElementById("lily");
const haewon = document.getElementById("haewon");
const sullyoon = document.getElementById("sullyoon");
const jinni = document.getElementById("jinni");
const bae = document.getElementById("bae");
const jiwoo = document.getElementById("jiwoo");
const kyujin = document.getElementById("kyujin");

let image = document.querySelector("#image>img");
let name = document.getElementById("name");
let korean = document.getElementById("korean-name");
let birthday = document.getElementById("birthday");

lily.addEventListener('click', () => {
	image.setAttribute("src", "./Images/lily.gif");
	name.innerHTML = "Lily";
	korean.innerHTML = "이름: 릴리";
	birthday.innerHTML = "생년월일: 2002. 10. 17";
});

haewon.addEventListener('click', () => {
	image.setAttribute("src", "./Images/haewon.gif");
	name.innerHTML = "Haewon";
	korean.innerHTML = "이름: 해원";
	birthday.innerHTML = "생년월일: 2003. 02. 25 ";
});

sullyoon.addEventListener('click', () => {
	image.setAttribute("src", "./Images/sullyoon.gif");
	name.innerHTML = "Sullyoon";
	korean.innerHTML = " 이름: 설윤";
	birthday.innerHTML = "생년월일: 2004. 01. 26";
});

jinni.addEventListener('click', () => {
	image.setAttribute("src", "./Images/jinni.gif");
	name.innerHTML = "Jinni";
	korean.innerHTML = " 이름: 지니";
	birthday.innerHTML = "생년월일: 2004. 04. 16 ";
});

bae.addEventListener('click', () => {
	image.setAttribute("src", "./Images/bae.gif");
	name.innerHTML = "Bae";
	korean.innerHTML = " 이름: 배이";
	birthday.innerHTML = "생년월일: 2004. 12. 28";
});

jiwoo.addEventListener('click', () => {
	image.setAttribute("src", "./Images/jiwoo.gif");
	name.innerHTML = "Jiwoo";
	korean.innerHTML = "이름: 지우";
	birthday.innerHTML = "생년월일: 2005. 04. 13";
});

kyujin.addEventListener('click', () => {
	image.setAttribute("src", "./Images/kyujin.gif");
	name.innerHTML = "Kyujin";
	korean.innerHTML = "이름: 규진";
	birthday.innerHTML = "생년월일: 2006. 05. 26";
});
