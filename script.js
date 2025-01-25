// Validation for the login form
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Grab form data
    const email = document.getElementById("emailid").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let errorMessage = "";

    // Simple validation checks
    if (!email || !username || !password) {
        errorMessage = "All fields are required.";
    }

    // Provide feedback to user
    if (errorMessage) {
        document.getElementById("login-error").innerText = errorMessage;
    } else {
        // Process the login (e.g., send data to the server)
        console.log("Logging in...");
        // You can send the data to the server here using fetch or AJAX
    }
});

// Validation for the sign-up form
document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Grab form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("emailid").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let errorMessage = "";

    // Simple validation checks
    if (!name || !email || !username || !password || !confirmPassword) {
        errorMessage = "All fields are required.";
    } else if (password !== confirmPassword) {
        errorMessage = "Passwords do not match.";
    }

    // Provide feedback to user
    if (errorMessage) {
        document.getElementById("signup-error").innerText = errorMessage;
    } else {
        // Process the sign-up (e.g., send data to the server)
        console.log("Signing up...");
        // You can send the data to the server here using fetch or AJAX
    }
});
