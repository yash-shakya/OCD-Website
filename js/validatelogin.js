document.addEventListener('DOMContentLoaded', () => {
    function generateCaptcha() {
        const captchaElement = document.getElementById('captcha');
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        captchaElement.textContent = captcha;
    }

    function isValidEmail(email) {
        // Regular expression for validating an email
        const regex = /^[^\s@]+@(gmail\.com|nitkkr\.ac\.in)$/;
        return regex.test(email);
    }

    document.getElementById('refreshCaptcha').addEventListener('click', generateCaptcha);

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const emailInput = document.getElementById('email').value;
        const contactNumber = document.getElementById('phone').value;
        const enteredCaptcha = document.getElementById('captchaInput').value;
        const generatedCaptcha = document.getElementById('captcha').textContent;
        const messageElement = document.getElementById('message');

        let isValid = true;
        let message = '';

        if (!isValidEmail(emailInput)) {
            message += 'Invalid email format. ';
            isValid = false;
        }

        if (!/^\d{10}$/.test(contactNumber)) {
            message += 'Please enter a valid 10-digit contact number. ';
            isValid = false;
        }

        if (enteredCaptcha !== generatedCaptcha) {
            message += 'CAPTCHA verification failed. ';
            isValid = false;
            generateCaptcha(); // Refresh CAPTCHA on failure
            document.getElementById('captchaInput').value = ''; // Clear CAPTCHA input
        }

        if (isValid) {
            messageElement.textContent = 'Login successful! Redirecting to the main website...';
            messageElement.style.color = 'green';
            // Here you would typically redirect to your main website
            // window.location.href = 'your-main-website-url';
            window.location.href='index.html';
        } else {
            messageElement.textContent = message;
            messageElement.style.color = 'red';
        }
    });

    generateCaptcha(); // Initial CAPTCHA generation
});