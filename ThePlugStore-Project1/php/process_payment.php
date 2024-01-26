<?php
// Database connection details
$servername = "your_server_name";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $cardholder_name = $_POST["input-name"];
    $card_number = $_POST["input-name"];
    $expiry_date = $_POST["expiry_date"];
    $cvv = $_POST["cvv"];

    // Insert data into the database
    $sql = "INSERT INTO payments (cardholder_name, card_number, expiry_date, cvv) VALUES ('$cardholder_name', '$card_number', '$expiry_date', '$cvv')";

    if ($conn->query($sql) === true) {
        echo "Payment data successfully saved to the database. Thank you for your purchase!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
