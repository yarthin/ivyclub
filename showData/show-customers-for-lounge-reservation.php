<?php

assert_options(ASSERT_BAIL, 1);

$clubzone_apikey = "d6a1d42cf04ac66a29283176d84b4028";

$clubzone_host = "http://api.clubzone.ch";
$showEvents = $clubzone_host . "/events/index";

$data = [
    "apikey" => $clubzone_apikey,
    "format" => "xml",
	"club_id" => 2,
    "from" => date("Y-m-d")
];

$result = simplexml_load_string(getResult($clubzone_host . "/events/index", $data));

foreach ($result->event as $event) {
    $event_id = (string) $event->id;

    echo "EVENT {$event_id}\n";

    $reservations = json_decode(getResult($clubzone_host . "/lounges2/reservations", [
        "apikey" => $clubzone_apikey,
        "format" => "json",
        "event_id" => $event_id
    ]));

    foreach ($reservations->reservations as $reservation) {
        echo "- {$reservation->customer->firstname} {$reservation->customer->lastname} ({$reservation->lounges})\n";
    }

    echo "\n";
}


function getResult($url, $data) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, count($data));
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    $resultRaw = curl_exec($ch);
    assertHttpStatusCode($ch, 200);

    curl_close($ch);

    return $resultRaw;
}

function assertHttpStatusCode($ch, $statusCode)
{
    assert(curl_getinfo($ch)["http_code"] == $statusCode);
}

function printResult($ch, $result, $requestData)
{
    echo "request: \n";
    echo json_encode($requestData, JSON_PRETTY_PRINT);

    echo "response:\n";
    echo json_encode($result, JSON_PRETTY_PRINT);

    echo "\n\n";
}
