function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        return false;
    }

    if (username.length < 3) {
        errorMessage.textContent = 'Username must be at least 3 characters long.';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    // If all validations pass
    errorMessage.textContent = '';
    alert('Login successful');
    return true;
}
