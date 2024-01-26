<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !$empty($message)){
  if(filter_var(email, FILTER_VALIDATE_EMAIL)){
    $receiver = "FhatuMakhara@gmail.com";
    $subject = "From: $name <$email>";
    $body = "Name: $name\nEmail: $email\nphone: $phone\nwebsite: $website\nMessage: $message\nRegards,\n$name";
    $sender = "from: $email";
    if(mail($receiver, $subject, $body, $sender )){
      echo "your message has been sent";
    }else{
      echo "sorry, failed to send your message!";
    }
  }else{
    echo "Enter a valid email address!";
  }
}else{
  echo "Email and password field is required";
}
 ?>
