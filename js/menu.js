const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo img');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Menu mobile toggle
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Função para atualizar navbar
function atualizarNavbar() {
    if (window.innerWidth <= 1024) {
        // Celular e tablet: sempre fundo escuro e logo branca
        navbar.classList.add('scrolled');
        logo.src = 'img/logof.png';
    } else {
        // Desktop: fundo muda conforme a rolagem
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            logo.src = 'img/logof.png';
        } else {
            navbar.classList.remove('scrolled');
            logo.src = 'img/Logo1.png';
        }
    }
}

// Eventos para verificar estado
window.addEventListener('load', atualizarNavbar);
window.addEventListener('resize', atualizarNavbar);
window.addEventListener('scroll', atualizarNavbar);
