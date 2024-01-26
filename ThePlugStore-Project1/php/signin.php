<?php
if (isset($_POST['signup'])) {
    // Get user input
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Perform registration logic (e.g., save to a database)

    // Redirect to the desired page after successful registration
    header("Location: signin.html");
    exit;
}
?>
