// Refactor Codex - 07/06/2025
document.addEventListener('DOMContentLoaded', () => { // Codex
  const carousel = document.querySelector('#reviewCarousel .carousel-inner'); // Codex
  const dots = document.querySelectorAll('#reviewCarousel .carousel-dot'); // Codex
  let currentIndex = 0; // Codex
  function showSlide(index) { // Codex
    const totalItems = document.querySelectorAll('#reviewCarousel .carousel-item').length; // Codex
    if (index >= totalItems) { currentIndex = 0; } // Codex
    else if (index < 0) { currentIndex = totalItems - 1; } // Codex
    else { currentIndex = index; } // Codex
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Codex
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex)); // Codex
  } // Codex
  document.getElementById('reviewCarouselPrev').addEventListener('click', () => showSlide(currentIndex - 1)); // Codex
  document.getElementById('reviewCarouselNext').addEventListener('click', () => showSlide(currentIndex + 1)); // Codex
  dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i))); // Codex
  setInterval(() => showSlide(currentIndex + 1), 3000); // Codex
}); // Codex
