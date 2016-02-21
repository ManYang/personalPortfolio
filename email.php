<?php 
$sendTo = "manyang1989@gmail.com"; 
$subject = "Inquiry";

$headers = "From: " . $_POST["name"]; 
$headers .= "<" . $_POST["email"] . ">\r\n"; 
$headers .= "Reply-To: " . $_POST["email"] . "\r\n"; 
$headers .= "Return-Path: " . $_POST["email"]; 
$message = $_POST["message"]; 

mail($sendTo, $subject, $message, $headers); 

header("Location: index.html");
exit;
?> 
