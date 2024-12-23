// Smooth Scroll to Top
const scrollToTopBtn = document.querySelector('.scroll-to-top');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Example of Form Validation (for contact form)
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
    } else {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});
