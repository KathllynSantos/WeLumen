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
        resetInterval();
    }

    function nextSlide() {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
        resetInterval();
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    startInterval();

    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);

    // 👉 Swipe para celular/tablet
    const carouselContainer = document.querySelector('.carousel-container');
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
    }
});
