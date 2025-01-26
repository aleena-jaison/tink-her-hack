// Toggle password visibility for login form
document.getElementById("togglePassword")?.addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
});

// Form validation for login
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("emailid").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("login-error");

    errorMessage.innerText = ""; // Clear any previous error message

    // Simple validation
    if (!email || !username || !password) {
        errorMessage.innerText = "All fields are required.";
    } else {
        console.log("Logging in...");
        // Submit the form or send the data to the backend
    }
});

// Form validation for sign-up
document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("emailid").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("signup-error");

    errorMessage.innerText = ""; // Clear any previous error message

    // Simple validation
    if (!name || !email || !username || !password || !confirmPassword) {
        errorMessage.innerText = "All fields are required.";
    } else if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match.";
    } else {
        console.log("Signing up...");
        // Submit the form or send the data to the backend
    }
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginErrorDiv = document.getElementById("login-error");
    const togglePasswordButton = document.getElementById("togglePassword");

    // Toggle password visibility
    togglePasswordButton.addEventListener("click", function() {
        const passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePasswordButton.textContent = "🙈"; // Change to hide
        } else {
            passwordField.type = "password";
            togglePasswordButton.textContent = "👁️"; // Change to show
        }
    });

    // Handle login form submission
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("emailid").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple hardcoded validation (demo purposes)
        if (email === "demo@kalagram.com" && username === "DemoUser" && password === "password123") {
            // Redirect to the profile page upon successful login
            window.location.href = "profile.html";
        } else {
            // Show error message for invalid login
            loginErrorDiv.textContent = "Invalid email, username, or password. Please try again.";
        }
    });
});

// signup-script.js
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const signupMessageDiv = document.getElementById("signup-message");

    signupForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form from submitting the default way

        const email = document.getElementById("emailid").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Here you can implement form validation if necessary
        if (email && username && password) {
            // Display the success message
            signupMessageDiv.textContent = "You have successfully signed up!";
            signupMessageDiv.style.color = "red";
          
            setTimeout(function() {
                window.location.href = "profile.html"; // Redirect to profile page
            }, 1500); // Wait 1.5 seconds before redirecting
       
        } else {
            // Display error message if the form fields are incomplete
            signupMessageDiv.textContent = "Please fill in all fields.";
            signupMessageDiv.style.color = "red";
        }
    });
});
      