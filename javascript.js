
// output footer copyright
let copyrightYear = 2022;
let currentYear = new Date().getFullYear();
if (currentYear > copyrightYear) {
    copyrightYear += `-${currentYear}`;
}
const divCopyright = document.querySelector('.copyright');
divCopyright.textContent = '\u{0000A9} ' + copyrightYear + ' CodedLovely';

// display hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// close hamburger menu
const navLink = document.querySelectorAll(".navilink");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}