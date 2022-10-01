const open = document.getElementById("open-btn");
const close = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
open.addEventListener('click', () => {
	overlay.style.transform = "translateY(0%)";
	overlay.style.height = "100%";
});
close.addEventListener('click', () => {
	overlay.style.transform = "translateY(-100%)";
	overlay.style.height = "0";
});
