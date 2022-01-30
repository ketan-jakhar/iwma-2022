const navbar = document.querySelector(".navbar");
const navBrand = document.querySelector(".navbar-brand");

window.onscroll = function () {
	"use strict";

	if (
		screen.width > 992 &&
		(document.body.scrollTop >= 100 ||
			document.documentElement.scrollTop >= 100)
	) {
		navbar.classList.add("nav-white");
		navbar.classList.remove("bg-transparent");
		navBrand.classList.add("brand-black");
		navBrand.classList.remove("brand-white");
	} else {
		navbar.classList.add("bg-transparent");
		navbar.classList.remove("nav-white");
		navBrand.classList.add("brand-white");

		navBrand.classList.remove("brand-black");
	}
};
