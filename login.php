<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get the form data
  $username = $_POST["username"];
  $password = $_POST["password"];

  // Perform user authentication (replace this with your actual code for authentication)
  // For demonstration purposes, we're using a simple example with hardcoded values
  $validUsername = "username";
  $validPassword = "password";

  if ($username === $validUsername && $password === $validPassword) {
    // Redirect to the index page after successful login
    header("Location: index.html");
    exit;
  } else {
    // Display an error message if authentication fails
    $errorMessage = "Invalid username or password.";
  }
}
?>
