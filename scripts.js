// Carousel Functionality
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = Array.from(carouselTrack.children);
const carouselPrevButton = document.querySelector('.carousel-button.prev');
const carouselNextButton = document.querySelector('.carousel-button.next');
let currentCarouselIndex = 0;

// Set item width dynamically for carousel
function setCarouselItemWidth() {
  const itemWidth = carouselTrack.getBoundingClientRect().width / carouselItems.length;
  carouselItems.forEach(item => {
    item.style.flex = `0 0 ${itemWidth}px`;
  });
}

// Update carousel position
function updateCarousel() {
  const trackWidth = carouselTrack.getBoundingClientRect().width;
  carouselTrack.style.transform = `translateX(-${currentCarouselIndex * trackWidth / carouselItems.length}px)`;
}

// Event listeners for carousel buttons
carouselNextButton.addEventListener('click', () => {
  if (currentCarouselIndex < carouselItems.length - 1) {
    currentCarouselIndex++;
    updateCarousel();
  }
});

carouselPrevButton.addEventListener('click', () => {
  if (currentCarouselIndex > 0) {
    currentCarouselIndex--;
    updateCarousel();
  }
});

// Adjust carousel on window resize
window.addEventListener('resize', () => {
  setCarouselItemWidth();
  updateCarousel();
});

// Initialize carousel
setCarouselItemWidth();
updateCarousel();

// Testimonials Functionality
const testimonialItems = document.querySelectorAll('.testimonial-item');
const testimonialPrevButton = document.querySelector('.testimonial-button.prev');
const testimonialNextButton = document.querySelector('.testimonial-button.next');
let currentTestimonialIndex = 0;

function showTestimonial(index) {
  testimonialItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

// Event listeners for testimonial buttons
testimonialPrevButton.addEventListener('click', () => {
  if (currentTestimonialIndex > 0) {
    currentTestimonialIndex--;
  } else {
    currentTestimonialIndex = testimonialItems.length - 1; // Loop back to the last testimonial
  }
  showTestimonial(currentTestimonialIndex);
});

testimonialNextButton.addEventListener('click', () => {
  if (currentTestimonialIndex < testimonialItems.length - 1) {
    currentTestimonialIndex++;
  } else {
    currentTestimonialIndex = 0; // Loop back to the first testimonial
  }
  showTestimonial(currentTestimonialIndex);
});

// Initialize the first testimonial as visible
showTestimonial(currentTestimonialIndex);


const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open'); // Toggle visibility
  hamburger.classList.toggle('active'); // Optional: animate hamburger
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
  }
});


const testimonials = document.querySelectorAll('.testimonial-item');
testimonials.forEach((item) => {
    item.style.background = 'transparent'; // Override any black background
});
