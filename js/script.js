// Hamburger functionality
const hamburgerIcon = document.getElementById('hamburger');
const crossIcon = document.getElementById('cross-icon');
const navLinks = document.getElementsByClassName('navbar__desktop-icon');


hamburgerIcon.addEventListener('click', () => {
    document.getElementsByClassName('navbar__content')[0].classList.add("display-flex");
    hamburgerIcon.classList.add("display-none");
});

crossIcon.addEventListener('click', () => {
    document.getElementsByClassName('navbar__content')[0].classList.remove("display-flex");
    hamburgerIcon.classList.remove("display-none");
});

[...navLinks].forEach(navLink => {
    navLink.addEventListener('click', () => {
        document.getElementsByClassName('navbar__content')[0].classList.remove("display-flex");
    });
});

//Close Hamburger if user switch to desktop version
window.addEventListener('resize', () => {
   if(window.innerWidth >= 768){
       document.getElementsByClassName('navbar__content')[0].classList.remove("display-flex");
   }
});