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

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $showEvents);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, count($data));
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
$resultRaw = curl_exec($ch);
$result = simplexml_load_string($resultRaw);

printResult($ch, $result, $data);
assertHttpStatusCode($ch, 200);

curl_close($ch);


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
    echo "\n\n now create events";
}



