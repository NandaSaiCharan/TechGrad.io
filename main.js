package-Lock.json// Initialize EmailJS
(function() {
    emailjs.init("lrAcEs564pCoeh8oD");
})();

// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            selected_package: document.getElementById('package-select').value,
            message: document.getElementById('message').value
        };

        try {
            await emailjs.send(
                'service_aq4u16i',
                'template_4mi6sz6',
                templateParams
            );
            
            // Show success modal
            modal.style.display = 'block';
            contactForm.reset();
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again.');
        }
    });

    // Modal close functionality
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Package selection functionality
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const packageSelect = document.getElementById('package-select');
            packageSelect.value = button.dataset.package;
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});