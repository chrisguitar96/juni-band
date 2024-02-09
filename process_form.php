<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up the recipient email address
    $to = "info@juniperfolk.com";
    
    // Set up the email subject
    $subject = "New Contact Form Submission";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Set up additional headers
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $email_message, $headers);

    // Redirect back to your contact page or a thank you page
    header("Location: index.html");
    exit();
}
?>
