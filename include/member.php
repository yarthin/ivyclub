<?php

if(!$_POST) exit;

// Email address verification, do not edit.
function isEmail($email) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$adress=$_POST['adress'];
$zip=$_POST['zip'];
$ort=$_POST['ort'];
$dateagepicker=$_POST['dateagepicker'];
$gender=$_POST['gender'];

if(trim($firstname) == '') {
	echo '<div class="error_message">Fehler! Vorname fehlt.</div>';
	exit();
} else if(trim($lastname) == '') {
	echo '<div class="error_message">Fehler! Nachname fehlt.</div>';
	exit();
} else if(trim($email) == '') {
	echo '<div class="error_message">Fehler! Ungültige E-Mail Adresse.</div>';
	exit();
} else if(trim($phone) == '') {
	echo '<div class="error_message">Fehler! Ungültige Telefonnummer</div>';
	exit();
} else if(!is_numeric($phone)) {
	echo '<div class="error_message">Fehler! Telefonnummer sind nur Zahlen erlaubt.</div>';
	exit();
} else if(!isEmail($email)) {
	echo '<div class="error_message">Fehler! Ungültige E-Mail Adresse, bitte nochmals versuchen.</div>';
	exit();
}




// Configuration option.
// Enter the email address that you want to emails to be sent to.
// Example $address = "joe.doe@yourdomain.com";

//$address = "example@themeforest.net";
//$address = "madnazz86@gmail.com";
$address = "daniel@ivyclub.ch";


$subject = "Member Anfrage via ivyclub.ch von ".$firstname.' '.$lastname;

											$message = "
											<p>Vorname: " .$firstname."</p>
											<p>Nachname: " .$lastname."</p>
											<p>Strasse: " .$adress."</p>
											<p>Plz: " .$zip." Ort: " .$ort."</p>
											<p>E-Mail: " .$email."</p>
											<p>Telefon: " .$phone."</p>
											<p>Geschlecht: " .$gender."</p>
											<p>Alter: " .$dateagepicker."</p>";


											// Always set content-type when sending HTML email
											$headers = "MIME-Version: 1.0" . "\r\n";
											$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

											// More headers
											$headers .= 'From: <webmaster@ivyclub.ch>' . "\r\n";
												if(mail($address,$subject,$message,$headers))

 {

	// Email has sent successfully, echo a success page.

	echo "<fieldset>";
	echo "<div id='success_page'>";
	echo "<h1>Vielen Dank</h1>";
	echo "<p>Wir haben deine Anfragen erhalten.</p>";
	echo "</div>";
	echo "</fieldset>";

} else {

	echo 'Fehler!';

}