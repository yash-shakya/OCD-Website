document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        alert('Invalid email or password!');
        return;
    }

    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    alert('Login successful!');
    window.location.href = 'members.html';
});
