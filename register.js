function register() {
    //GET THE VALUES ENTERED BY THE USER
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordrepeat = document.getElementById("password-repeat").value;
    //PERFORM REGISTRATION LOGIC HERE (E.G., STORE USERNAME AND PASSWORD)
    //REDIRECT THE USER TO THE LOGIN PAGE
    window.location.href = "login.html";
}
function validateRegistration() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordrepeat = document.getElementById("password-repeat").value;

    if (username.trim() === "") {
      alert("Please enter a username.");
      return false;
    }
    
    if (email.trim() === "") {
      alert("Please enter an email.");
      return false;
    }

    if (password.trim() === "") {
      alert("Please enter a password.");
      return false;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
    
    if (password!== passwordrepeat) {
      alert("Passwords do not match.");
      return false;
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      return false;
    }

    // If all validations pass, you can submit the form
    return true;
  }
