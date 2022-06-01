//--------
// set vw = client width (excluding scrollbar width)
//
const setVw = function() {
  const vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}
window.addEventListener('DOMContentLoaded', setVw);
window.addEventListener('resize', setVw);


//--------
// collapse nav menu
//
const lgWindow = 992;
let navItem = document.getElementById('navbarCollapse');
navItem.addEventListener('click', () => {
if (window.innerWidth < lgWindow) {
  document.getElementById('navbarButton').click();
}
});


//--------
// display tooltip on icon
//
document.addEventListener("DOMContentLoaded", function(){
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function(element){
    return new bootstrap.Tooltip(element);
});
});


//--------
// output footer copyright
//
let copyrightYear = 2022;
let currentYear = new Date().getFullYear();
if (currentYear > copyrightYear) {
copyrightYear += `-${currentYear}`;
}
const divCopyright = document.getElementById('copyright')
divCopyright.textContent = '\u{0000A9} ' + copyrightYear + ' CodedLovely';
