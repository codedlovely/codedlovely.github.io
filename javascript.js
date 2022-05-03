// output footer copyright
let copyrightYear = 2022;
let currentYear = new Date().getFullYear();
if (currentYear > copyrightYear) {
    copyrightYear += `-${currentYear}`;
}
const divCopyright = document.getElementById('copyright')
divCopyright.textContent = '\u{0000A9} ' + copyrightYear + ' CodedLovely';

// Scroll back to top
mybutton = document.getElementById("scrollBack");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}