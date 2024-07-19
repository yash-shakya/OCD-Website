const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    formResponse.style.display = 'block';
    setTimeout(() => {
        contactForm.reset();
        formResponse.style.display = 'none';
    }, 2000);
});
