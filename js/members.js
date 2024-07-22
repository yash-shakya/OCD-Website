document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        alert('You need to be logged in to access this page.');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('memberName').textContent = loggedInUser.name;
});

document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault();
    sessionStorage.removeItem('loggedInUser');
    alert('Logged out successfully.');
    window.location.href = 'login.html';
});