document.addEventListener('DOMContentLoaded', function () {
    // Example: Form validation
    const form = document.querySelector('#contactForm'); // Assuming there's a form with this ID
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;
            const formData = new FormData(form);

            // Basic validation example
            formData.forEach((value, key) => {
                const inputElement = form.querySelector(`[name=${key}]`);
                if (inputElement) {
                    if (value.trim() === '') {
                        inputElement.classList.add('is-invalid');
                        isValid = false;
                    } else {
                        inputElement.classList.remove('is-invalid');
                    }
                }
            });

            if (isValid) {
                // Form submission logic here (e.g., send data to server)
                console.log('Form is valid. Submitting...');
                // Example: Post data using fetch
                fetch('your-server-endpoint', {
                    method: 'POST',
                    body: formData
                }).then(response => response.json())
                  .then(data => {
                      console.log('Success:', data);
                  }).catch((error) => {
                      console.error('Error:', error);
                  });
            } else {
                console.log('Form is invalid. Please correct the errors and try again.');
            }
        });
    }

    // Example: Dynamic cart update
    const cartItems = document.querySelectorAll('.cart-item');
    const cartTotal = document.querySelector('#cartTotal');

    if (cartItems && cartTotal) {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.item-quantity').textContent, 10);
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('₹', ''));
            total += quantity * price;
        });
        cartTotal.textContent = `₹${total.toFixed(2)}`;
    }

    // Example: Back to top functionality
    const backToTopBtn = document.querySelector('#button');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
