<?php

include dirname(dirname(__FILE__)).'/mail.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'email_validation.php';

$name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$email = trim($_POST['email']);
$subject = (!empty($_POST['title'])) ? substr($_POST['title']) : 'Webinar - time to know';
$message = (!empty($_POST['comments'])) ? substr($_POST['comments']) : 'I want subscribe on webinar';

$error = '';

// Check name

if(!$name)
{
$error .= 'Please enter your first name.<br />';
}

if(!$last_name)
{
$error .= 'Please enter your last name.<br />';
}
// Check email

if(!$email)
{
$error .= 'Please enter an e-mail address.<br />';
}

if($email && !ValidateEmail($email))
{
$error .= 'Please enter a valid e-mail address.<br />';
}

if(!$error)
{
$mail = mail(CONTACT_FORM, $subject, $message,
     "From: ".$name." <".$email.">\r\n"
    ."Reply-To: ".$email."\r\n"
    ."X-Mailer: PHP/" . phpversion());

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="note-error">'.$error.'</div>';
}

}

?>