//RESPONSIVE CAROUSEL SLIDER

const slider = document.getElementById('webSlider');
const cards = document.querySelectorAll('.web3-card');
const pagination = document.getElementById('pagination');
let index = 0;
let autoSlideInterval; // Declare interval variable

function getCardsPerSlide() {
    if (window.innerWidth <= 768) {
        return 1;
    } else if (window.innerWidth <= 1024) {
        return 2;
    } else {
        return 3;
    }
}

function updateSlider() {
    const cardsPerSlide = getCardsPerSlide();
    slider.style.transform = `translateX(-${index * (100 / cardsPerSlide)}%)`;
    updatePagination();
}

function nextSlide() {
    const cardsPerSlide = getCardsPerSlide();
    index = (index + 1) % (cards.length - (cardsPerSlide - 1));
    updateSlider();
}

function prevSlide() {
    const cardsPerSlide = getCardsPerSlide();
    index = (index - 1 + (cards.length - (cardsPerSlide - 1))) % (cards.length - (cardsPerSlide - 1));
    updateSlider();
}

function autoSlide() {
    nextSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 3000); // Store interval ID
}

function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide(); // Start the slider initially

// Pagination
function createPagination() {
    const cardsPerSlide = getCardsPerSlide();
    const totalPages = cards.length - (cardsPerSlide - 1);
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            index = i;
            updateSlider();
        });
        pagination.appendChild(dot);
    }
    updatePagination();
}

function updatePagination() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

createPagination(); // Initialize pagination

window.addEventListener('resize', updateSlider);
updateSlider();

// Hover Pause
slider.addEventListener('mouseenter', pauseAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);









