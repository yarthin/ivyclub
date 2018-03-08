<?php

assert_options(ASSERT_BAIL, 1);

if(!$_POST) exit;

// Email address verification, do not edit.
function isEmail($email) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$firstname     = $_POST['firstname'];
$lastname     = $_POST['lastname'];
$email    = $_POST['email'];
$birthday    = $_POST['birthday'];
$telno    = $_POST['telno'];
$event_id    = $_POST['event_id'];


if(trim($firstname) == '') {
	echo '<div class="error_message">Fehler! Vorname fehlt.</div>';
	exit();
} else if(trim($lastname) == '') {
	echo '<div class="error_message">Fehler! Nachname fehlt.</div>';
	exit();
} else if(trim($email) == '') {
	echo '<div class="error_message"Fehler! E-Mail Adresse ist ungültig.</div>';
	exit();
} else if(!isEmail($email)) {
	echo '<div class="error_message">Fehler! E-Mail Adresse ist ungültig, bitte nochmals versuchen.</div>';
	exit();
}


// Configuration option.
// Enter the email address that you want to emails to be sent to.
// Example $address = "joe.doe@yourdomain.com";

//$address = "example@themeforest.net";
$address = "daniel@ivyclub.ch";


// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'Nachricht via ivyclub.ch von: ' . $firstname . ' ' . $lastname . '';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_content = "Name: $firstname $lastname" . PHP_EOL . PHP_EOL;
$e_reply = "E-Mail: $email". PHP_EOL . PHP_EOL;
$c_reply = "Telefon: $phone ". PHP_EOL . PHP_EOL;
$e_body = "Nachricht: $comments" . PHP_EOL . PHP_EOL;


$msg = wordwrap( $e_content . $e_reply . $c_reply . $e_body, 70 );

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $e_subject, $msg, $headers)) {

	// Email has sent successfully, echo a success page.

	echo "<div id='success_page'>";
	echo "<h1>Reservation verschickt.</h1>";
	echo "<p>Vielen Dank <strong>$firstname</strong> <strong>$lastname</strong>, wir haben deine Nachricht erhalten und melden uns umgehend bei dir.</p>";
	echo "</div>";

} else {

	echo 'Fehler! Bitte wende dich an <a href="mailto:info@ivyclub.ch">info@ivyclub.ch</a>';

}

$clubzone_apikey = "d6a1d42cf04ac66a29283176d84b4028";

$clubzone_host = "http://api.clubzone.ch";
$createCustomer = $clubzone_host . "/customer/create";
$createLoungereservation = $clubzone_host . "/lounge/addreservation";

$data = [
    "apikey" => $clubzone_apikey,
    "format" => "xml",
    "firstname" => $firstname,
    "lastname" => $laststname,
    "email" => $email,
    "birthday" => $birthday,
    "telno" => $telno,
    "event_id " => $event_id ,
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $createCustomer);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, count($data));
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
$resultRaw = curl_exec($ch);
$result = simplexml_load_string($resultRaw);

/* comment here */
/* printResult($ch, $result, $data); */

assertHttpStatusCode($ch, 200);

/* curl -X POST \
  https://api.sparkpost.com/api/v1/transmissions \
  -H "Authorization: 5471c8fadfc48f52c0897a069b552616ebf3a858" \
  -H "Content-Type: application/json" \
  -d '{
    "options": {
      "sandbox": true
    },
    "content": {
      "from": "sandbox@sparkpostbox.com",
      "subject": "Thundercats are GO!!!",
      "text": "Sword of Omens, give me sight BEYOND sight"
    },
    "recipients": [{ "address": "daniel@ivyclub.ch" }]
}' */

curl_close($ch);

$id = (string) $result->customer["id"];

echo "<div id='success_page'><h1>Reservation erhalten.</h1><p>\nVielen Dank {$firstname} {$lastname} wir haben deine Reservation erhalten.\n</p></div>";

$data = [
    "apikey" => $clubzone_apikey,
    "format" => "xml",
    'customer_id' => $id,
    'lounge_condition_id' => 1,
    'event_id' => $event_id 
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $createLoungereservation);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_exec($ch);

$resultRaw = curl_exec($ch);
$result = simplexml_load_string($resultRaw);

/* comment here */
/* printResult($ch, $result, $data); */

assertHttpStatusCode($ch, 200);

function assertHttpStatusCode($ch, $statusCode)
{
    assert(curl_getinfo($ch)["http_code"] == $statusCode);
}

function printResult($ch, $result, $requestData)
{
    echo "request: \n";
    echo json_encode($requestData, JSON_PRETTY_PRINT);
    echo "\nresponse code: " . curl_getinfo($ch)["http_code"] . "\n";
    if (curl_getinfo($ch)["http_code"] != 204) {
        echo "response:\n";
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
    echo "\n\n Reservation is done";
}
