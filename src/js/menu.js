/* script.js */

const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo img');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

function atualizarNavbar() {
  if (window.innerWidth <= 1024) {
    navbar.classList.add('scrolled');
    logo.src = 'img/logof.png';
  } else {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      logo.src = 'img/logof.png';
    } else {
      navbar.classList.remove('scrolled');
      logo.src = 'img/Logo1.png';
    }
  }
}

window.addEventListener('load', atualizarNavbar);
window.addEventListener('resize', atualizarNavbar);
window.addEventListener('scroll', atualizarNavbar);
