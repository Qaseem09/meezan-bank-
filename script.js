const reviews = document.querySelectorAll('.review');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

function updateCarousel() {
  const width = reviews[0].clientWidth;
  document.querySelector('.carousel-container').style.transform = translateX(-${currentIndex * width}px);
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? reviews.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);