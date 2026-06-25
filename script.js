// Mobile Responsive Menu Toggle Activation
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close nav drawer automatically on link click (mobile quality of life)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Front-end Admissions Form Interactivity
document.getElementById('vijethaEnrollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const student = document.getElementById('studentName').value;
    const targetClass = document.getElementById('targetClass').value;
    
    alert(`Success! Inquiry for "${student}" (Targeting ${targetClass}) has been submitted successfully.\n\nThe admissions officer from the Vijetha Guntur campus will connect with you via your provided phone number shortly.`);
    
    this.reset();
});