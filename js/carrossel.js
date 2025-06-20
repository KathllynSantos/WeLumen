document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const overlayTexts = document.querySelectorAll(".overlay-text");
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            overlayTexts[i].classList.remove("active-text");
            if (i === index) {
                slide.classList.add("active");
                overlayTexts[i].classList.add("active-text");
            }
        });
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        showSlide(currentIndex);
        resetInterval(); // Reinicia o intervalo após a interação
    }

    function nextSlide() {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
        resetInterval(); // Reinicia o intervalo após a interação
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function resetInterval() {
        clearInterval(slideInterval); // Limpa o intervalo existente
        startInterval(); // Inicia um novo intervalo
    }

    startInterval(); // Inicia o intervalo automaticamente

    // Atribui as funções aos botões
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
});
