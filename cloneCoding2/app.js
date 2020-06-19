window.addEventListener("load", () => {
	const menuBtn = document.querySelector(".header__menu-btn");
	const slideMenu = document.querySelector(".slide-menu");
	const menuLink = document.querySelector(".menu__link");
	const menuCloseBtn = document.querySelector(".menu__close-btn");

	menuBtn.addEventListener("click", () => {
		slideMenu.classList.toggle("active");
	});
	menuCloseBtn.addEventListener("click", () => {
		slideMenu.classList.toggle("active");
	});
	menuLink.addEventListener("click", () => {
		slideMenu.classList.toggle("active");
	});
	document.addEventListener("click", e => {
		if (e.target.className.match("menu")) {
			return;
		}
		slideMenu.classList.remove("active");
	});
});
