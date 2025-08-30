document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (basic example, no actual backend integration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // In a real application, you would send this data to a server
            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Message:', message);

            alert('شكراً لتواصلك معنا! سيتم الرد عليك قريباً.');

            // Clear the form
            contactForm.reset();
        });
    }
});