document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("message").textContent = "Спасибо! Бронирование отправлено.";
    this.reset();
});

const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.carousel-container');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;

function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;

    container.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));
