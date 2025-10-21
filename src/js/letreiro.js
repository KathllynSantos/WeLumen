document.addEventListener("DOMContentLoaded", function() {
    const letreiro = document.querySelector(".letreiro");
    const palavras = letreiro.innerHTML; // Pega o conteúdo atual

    // Duplica o conteúdo para um looping contínuo sem reset perceptível
    letreiro.innerHTML += letreiro.innerHTML;
});
