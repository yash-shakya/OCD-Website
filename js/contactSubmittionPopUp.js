const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closePopup = document.getElementById('close-popup');
const nameinput=document.getElementById("name");
const emailinput=document.getElementById("email");
const messageinput=document.getElementById("message");

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Replace with your desired message
    popupMessage.textContent = "Thanks to Connect!";

    popup.classList.remove('popup-hidden');
});

closePopup.addEventListener('click', () => {
    popup.classList.add('popup-hidden');
    nameinput.value="";
    emailinput.value="";
    messageinput.value="";
});
