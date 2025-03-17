// Detecta o evento de rolar a página
window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    
    // Verifica se a página foi rolada
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Adiciona a classe .scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove a classe .scrolled
    }
};