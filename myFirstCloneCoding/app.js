window.addEventListener("load", () => {
	const menu = document.querySelector(".btn-menu");
	const aside = document.querySelector("aside");
	const btnClose = document.querySelector("aside i");
	console.log(aside);
	menu.addEventListener("click", () => {
		aside.classList.toggle("active");
	});
	btnClose.addEventListener("click", () => {
		aside.classList.toggle("active");
	});
	// aside.addEventListener("click", () => {
	// 	aside.classList.toggle("active");
	// });
});
