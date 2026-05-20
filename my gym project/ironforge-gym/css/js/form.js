// Form Handling

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Show success message
        alert('Thank you for joining IronForge Fitness! We will contact you shortly.');
        
        // Reset form
        form.reset();
    });
}

// Initialize forms when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    validateForm('contact-form');
    validateForm('signup-form');
    validateForm('trial-form');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});