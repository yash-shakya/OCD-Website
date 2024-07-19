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

// JS code for Pop-up section 

document.addEventListener('DOMContentLoaded', function() {
    var popupBanner = document.getElementById('popup-banner');
    var closeBtn = document.getElementById('close-btn');

    // Function to show the popup banner
    function showPopup() {
        popupBanner.style.display = 'block';
    }

    // Function to close the popup banner
    closeBtn.addEventListener('click', function() {
        popupBanner.style.display = 'none';
    });

    setTimeout(showPopup, 1000);
});
