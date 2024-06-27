document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate Full Name
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        document.getElementById('nameError').textContent = 'Name must not be less than 5 characters';
        isValid = false;
    }

    // Validate Email ID
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a correct email';
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    if (phone === '1234567890' || phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
        isValid = false;  //Project Submit BY Shaikh Afsar Alli
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 8 || password.toLowerCase() === 'password' || password === fullName) {
        document.getElementById('passwordError').textContent = 'Password is not strong';
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can proceed with form submission here
        // e.target.submit();
    }
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        // You can add real-time validation logic here if needed
    });
});
