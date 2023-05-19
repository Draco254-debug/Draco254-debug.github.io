<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get the form data
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  $passwordrepeat = ["password-repeat"];

  // Validate the form data (add any additional validation rules as needed)
  if (empty($username) || empty($email) || empty($password) || empty($passwordrepeat)) {
    // Display an error message if any required field is empty
    $errorMessage = "Please fill in all the fields.";
  } else {
    // Perform necessary operations (e.g., store the user data in a database)
    // Replace this with your actual code for user registration
    // ...

    // Redirect to the login page after successful registration
    header("Location: login.html");
    exit;
  }
}
?>