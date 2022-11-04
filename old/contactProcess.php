<?php

//UPDATE - Yeah, what was I thinking? No, do not use. 

//Grab the info from the
// if(isset($_POST['email'])){
//   $to = "vbounyar@gmail.com";

//   // Start validating/Sanitize the inputs
//   $from = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

//   if (filter_var($from, FILTER_VALIDATE_EMAIL)) {
//       // Valid address
//   } else {
//       // Not valid address
//       echo "$from is <strong>NOT</strong> a valid email address.<br/><br/>";
//   }

//   $name = $_POST['name'];
//   $subject = $_POST['subject'];
//   $message = $_POST['message'];


//   // Check to see if blank
//   if ($name == "") {
//     echo "Name is <strong>BLANK</strong>.<br/><br/>";
//   }

//   if ($subject == "") {
//     echo "Subject is <strong>BLANK</strong>.<br/><br/>";
//   }

//   if ($message == ""){
//       echo "Message is <strong>BLANK</strong>.<br/><br/>";
//   }

//   // Sanitize texts
//   $name = filter_var($name, FILTER_SANITIZE_STRING);
//   $subject = filter_var($subject, FILTER_SANITIZE_STRING);
//   $message = filter_var($message, FILTER_SANITIZE_STRING);


//   $subject = "VanidaB Site: " . $subject;
//   $mainMessage = $message . "\r\nEmail of person: " . $from;

//    //Headers
// 	$headers  = "MIME-Version: 1.0\r\n";
// 	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
// 	$headers .= "From: ContactForm <vbounyar@vanidab.com>\r\n" ;
//   $headers .= "Reply-To: " . $name . " <" . $from . ">";



// 	if ( mail($to,$subject,$mainMessage,$headers) ) {
//     echo "<script type='text/javascript'>window.location = 'index.html';</script>";
//   } else {
//     echo "Something failed.";
//   }
// }


?>
