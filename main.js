const slides = Array.from(document.querySelectorAll('.slide'));
const SLIDE_DURATION = 5600;
let currentIndex = 0;

const setActiveSlide = (nextIndex) => {
  slides[currentIndex].classList.remove('is-active');
  slides[currentIndex].setAttribute('aria-hidden', 'true');

  currentIndex = nextIndex;

  slides[currentIndex].classList.add('is-active');
  slides[currentIndex].setAttribute('aria-hidden', 'false');
};

if (slides.length > 0) {
  slides.forEach((slide, index) => {
    slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
  });

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  }, SLIDE_DURATION);
}
