const carousel = document.querySelector('.slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const totalSlides = 3; // Общее количество слайдов

updateCarousel(counter);

nextBtn.addEventListener('click', () => {
  if (counter < totalSlides - 1) {
    counter++;
    updateCarousel(counter * 3);
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    updateCarousel(counter * 3);
  }
});

function updateCarousel(counter) {
  carousel.style.transform = `translateX(${-counter * 307}px)`; /* 320 - ширина изображения + расстояние */
}

const carousel1 = document.querySelector('.slides1');
const prevBtn1 = document.getElementById('prevBtn1');
const nextBtn1 = document.getElementById('nextBtn1');

let counter1 = 0;
const imagesPerSlide1 = 3;
const totalSlides1 = Math.ceil(9 / imagesPerSlide1); // Общее количество слайдов

updateCarousel1(counter1);

nextBtn1.addEventListener('click', () => {
  if (counter1 < totalSlides1 - 1) {
    counter1++;
    updateCarousel1(counter1);
  }
});

prevBtn1.addEventListener('click', () => {
  if (counter1 > 0) {
    counter1--;
    updateCarousel1(counter1);
  }
});

function updateCarousel1(counter1) {
  const maxTransformValue = (totalSlides1 - 1) * imagesPerSlide1 * (320 + 10);
  const transformValue = counter1 * imagesPerSlide1 * (308);
  carousel1.style.transform = `translateX(${-transformValue}px)`;
}

