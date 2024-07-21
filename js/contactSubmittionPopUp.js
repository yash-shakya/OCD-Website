const form = document.getElementById('myForm');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closePopup = document.getElementById('close-popup');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Replace with your desired message
    popupMessage.textContent = "Thanks to Connect!";

    popup.classList.remove('popup-hidden');
});

closePopup.addEventListener('click', () => {
    popup.classList.add('popup-hidden');
});
