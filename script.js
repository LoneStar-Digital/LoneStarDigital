// 1. Mobile Navigation Panel Controller
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuBtn.innerText = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

// 2. Mail Delivery Pipeline Interceptor (Updated with Dynamic Tier Subject Injection)
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tier = document.getElementById('tier').value;
        const msg = document.getElementById('msg').value;

        // Injected tier selection parameters straight into the Title string syntax
        const subject = encodeURIComponent(`New Project Proposal [${tier}] from ${name}`);
        const body = encodeURIComponent(`Client Identity: ${name}\nReturn Route: ${email}\nSelected Tier Configuration: ${tier}\n\nProject Scope Specifications:\n${msg}`);

        window.location.href = `mailto:lonestardigital@outlook.com?subject=${subject}&body=${body}`;
    });
}

// 3. Compact One-Frame Gradient Cross-Fade Controller
function runSlideshow() {
    const slides = document.querySelectorAll('.hero-slideshow-container .slide');
    if (slides.length === 0) return; 

    let currentIdx = 0;
    const speed = 4500; 

    setInterval(() => {
        slides[currentIdx].classList.remove('active');
        currentIdx = (currentIdx + 1) % slides.length;
        slides[currentIdx].classList.add('active');
    }, speed);
}

// 4. Portfolio Lightbox Maximizer (Clean Glide & Mobile Guard)
function initLightbox() {
    const portItems = document.querySelectorAll('.port-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');

    if (!lightbox || portItems.length === 0) return;

    // Open Lightbox
    portItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const overlayText = item.querySelector('.port-overlay span');

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = overlayText ? overlayText.textContent : '';

            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden'; 
        });
    });

    // Close Lightbox Handler
    const closeLightbox = () => {
        lightbox.classList.remove('show');
        document.body.style.overflow = ''; 
    };

    // Close Click Events
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Close via Hardware Keyboard Escape Track
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            closeLightbox();
        }
    });
}

// Run engines when layout drawing completes
document.addEventListener('DOMContentLoaded', () => {
    runSlideshow();
    initLightbox();
});
