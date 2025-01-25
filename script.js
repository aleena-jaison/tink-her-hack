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
