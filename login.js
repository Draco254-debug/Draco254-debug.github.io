function login() {
    //GET THE VALUES ENTERED BY THE USER
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //PERFORM LOGIN VALIDATION HERE (E.G., CHECK AGAINST STORED USERNAMES AND PASSWORDS)
    //REDIRECT THE USER TO THE INDEX.HTML PAGE
    window.location.href = "Home.html";
}
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "") {
      alert("Please enter a username.");
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

    // If all validations pass, you can submit the form
    return true;
  }
  