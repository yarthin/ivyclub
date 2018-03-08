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
$result_json = json_decode(json_encode($result), true);
