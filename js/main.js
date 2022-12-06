// Simple Image carousel
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;

prevBtn.onclick = () => nextSlide(-1);
nextBtn.onclick = () => nextSlide(1);

function nextSlide(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.add('fade');
        dots[i].className = dots[i].className.replace(' active', '');
        dots[i].addEventListener('click', dotView);
    }
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';
}

function dotView() {
    slideIndex = parseInt(this.getAttribute('data-id'));
    showSlides();
}

showSlides(slideIndex);