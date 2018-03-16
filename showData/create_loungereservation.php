<?php

assert_options(ASSERT_BAIL, 1);

$clubzone_apikey = "d6a1d42cf04ac66a29283176d84b4028";

$clubzone_host = "http://api.clubzone.ch";
$createCustomer = $clubzone_host . "/customer/create";
$createLoungereservation = $clubzone_host . "/lounge/addreservation";

$data = [
    "apikey" => $clubzone_apikey,
    "format" => "xml",
    "firstname" => "Daniel",
    "lastname" => "Monn",
    "email" => "madnazz86@gmail.com",
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $createCustomer);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, count($data));
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
$resultRaw = curl_exec($ch);
$result = simplexml_load_string($resultRaw);

printResult($ch, $result, $data);
assertHttpStatusCode($ch, 200);

curl_close($ch);

$id = (string) $result->customer["id"];

echo "\n\nnow create a lounge reservation for customer with id {$id} \n";

$data = [
    "apikey" => $clubzone_apikey,
    "format" => "xml",
    'customer_id' => $id,
    'lounge_condition_id' => 26, // Nach Absprache
    'event_id' => 158
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $createLoungereservation);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_exec($ch);

$resultRaw = curl_exec($ch);
$result = simplexml_load_string($resultRaw);

printResult($ch, $result, $data);
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
    echo "\n\n";
}
