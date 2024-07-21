(function() {
    if (document.getElementById('registrationForm')) {
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert('User already registered with this email!');
                window.location.href = 'login.html';
                return;
            }

            const newUser = { name, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registration successful! Please log in.');
            window.location.href = 'login.html';
        });
    }
})();


(function() {
    if (document.getElementById('loginForm')) {
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
    }
})();


(function() {
    if (document.getElementById('memberName')) {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

        if (!loggedInUser) {
            alert('You need to be logged in to access this page.');
            window.location.href = 'login.html';
            return;
        }

        document.getElementById('memberName').textContent = loggedInUser.name;

        document.getElementById('logoutLink').addEventListener('click', function(event) {
            event.preventDefault();
            sessionStorage.removeItem('loggedInUser');
            alert('Logged out successfully.');
            window.location.href = 'login.html';
        });
    }
})();






