const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
let body = document.getElementById('body');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');

    //to add background color on clicking the hamburger
    // body.style.background = "#38CFD9";

})

// let navOpen = false;

// navToggle.addEventListener('click', () => {
//     if (!navOpen) {
//         navToggle.classList.add('open');
//         navOpen = true;
//     } else {
//         navToggle.classList.remove('open');
//         navOpen = false;
//     }
// })