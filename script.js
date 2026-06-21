// 1. Mobile Navigation Panel Controller
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuBtn.innerText = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

// 2. Mail Delivery Pipeline Interceptor
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('msg').value;

        const subject = encodeURIComponent(`New Project Proposal from ${name}`);
        const body = encodeURIComponent(`Client Identity: ${name}\nReturn Route: ${email}\n\nProject Scope Specifications:\n${msg}`);

        window.location.href = `mailto:lonestardigital@outlook.com?subject=${subject}&body=${body}`;
    });
}

// 3. Compact One-Frame Gradient Cross-Fade Controller
function runSlideshow() {
    const slides = document.querySelectorAll('.hero-slideshow-container .slide');
    if (slides.length === 0) return; // Safely escape if not on the homepage

    let currentIdx = 0;
    const speed = 4500; // Lingers on each photo for 4.5 seconds before smoothly cross-fading

    setInterval(() => {
        // Fade out current slide layer
        slides[currentIdx].classList.remove('active');

        // Increment index pointer and loop back to 0 at the end
        currentIdx = (currentIdx + 1) % slides.length;

        // Fade in new slide layer smoothly over the old one
        slides[currentIdx].classList.add('active');
    }, speed);
}

// Run engine when layout drawing completes
document.addEventListener('DOMContentLoaded', runSlideshow);