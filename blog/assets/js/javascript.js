// output footer copyright
let copyrightYear = 2022;
let currentYear = new Date().getFullYear();
if (currentYear > copyrightYear) {
    copyrightYear += `-${currentYear}`;
}
const divCopyright = document.getElementById('copyright')
divCopyright.textContent = '\u{0000A9} ' + copyrightYear + ' CodedLovely';
