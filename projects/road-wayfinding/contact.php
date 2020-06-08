<?php

if($_POST["submit"]) {
    $recipient="road@a3.kyiv.ua";
    $subject="Зворотній зв’язок";
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="
    	Email: $senderEmail\n\n
    	$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Дякуємо за відгук!.</p>";
}

?>