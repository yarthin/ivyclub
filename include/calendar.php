<?php
require('config.php');

function curl_get_contents($url) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}

// Get params from config file
$fb_page_id = Config::FB_PAGE_ID;
$year_range = Config::EVENT_YEAR_RANGE;
$year_before = Config::EVENT_YEAR_BEFORE;
$year_after = Config::EVENT_YEAR_AFTER;

// Set time to display events
if ($year_before) {
	$since_date = strtotime(date('d-m-Y', strtotime('-' . $year_range . ' years')));
} else {
	$since_date = strtotime(date('d-m-Y'));
}
if ($year_after) {
	$until_date = strtotime(date('d-m-Y', strtotime('+' . $year_range . ' years')));
} else {
	$until_date = strtotime(date('d-m-Y'));
}

// Request to Facebook Graph API to get events
$access_token = "226601451024177|1_YwHxuKJTfz4e8_6Sz-zGtUtpg";
$fields = "id,name,description,place,timezone,start_time,end_time,cover";
$json_link = "https://graph.facebook.com/{$fb_page_id}/events/attending/?fields={$fields}&access_token={$access_token}&since={$since_date}&until={$until_date}&limit=1000";
// $json = file_get_contents($json_link);
$json = curl_get_contents($json_link);

// Decode json from Facebook Graph API
$fb_events = json_decode($json, true);

// Convert data for json to use in ajax
$events = array();
if (count($fb_events['data']) > 0) {
	foreach ($fb_events['data'] as $fb_event) {
		date_default_timezone_set($fb_event['timezone']);
		$event = new stdClass();
		$event->event_id = $fb_event['id'];
		$event->name = $fb_event['name'];
		$event->image = isset($fb_event['cover']['source']) ? $fb_event['cover']['source'] : "https://graph.facebook.com/{$fb_page_id}/picture?type=large";
		$event->day = date('j', strtotime($fb_event['start_time']));
		$event->month = date('n', strtotime($fb_event['start_time']));
		$event->year = date('Y', strtotime($fb_event['start_time']));
		$event->time = date('H:i', strtotime($fb_event['start_time']));
		
		// Duration
		if (!isset($fb_event['end_time'])) {
			$event->duration = 1; // If end_time is blank -> event's duration = 1 (day).	
		} else {
			if (date('dmY', strtotime($fb_event['start_time'])) == date('dmY', strtotime($fb_event['end_time']))) { // If start date and end date are same day -> event's duration = 1 (day).
				$event->duration = 1;
			} else {
				$start_day = date('d-m-Y', strtotime($fb_event['start_time']));
				$end_day = date('d-m-Y', strtotime($fb_event['end_time']));
				$event->duration = ceil(abs(strtotime($end_day) - strtotime($start_day)) / 86400) + 1; // Get event's duration = days between start date and end date.
				
				$event->end_date = date('d-m-Y', strtotime($fb_event['end_time']));
			}
		}
		
		// Location
		$location_ar = array();
		if (isset($fb_event['place']['name'])) { array_push($location_ar, $fb_event['place']['name']); }
		if (isset($fb_event['place']['location']['city'])) { array_push($location_ar, $fb_event['place']['location']['city']); }
		if (isset($fb_event['place']['location']['country'])) { array_push($location_ar, $fb_event['place']['location']['country']); }
		if (isset($fb_event['place']['location']['zip'])) { array_push($location_ar, $fb_event['place']['location']['zip']); }
		$event->location = implode(", ", $location_ar);
		
		// Map
		if (isset($fb_event['place']['location']['latitude'])) { $event->latitude = $fb_event['place']['location']['latitude']; }
		if (isset($fb_event['place']['location']['longitude'])) { $event->longitude = $fb_event['place']['location']['longitude']; }
		
		$event->intro = $fb_event['description'];
		$event->description = nl2br($fb_event['description']);
		
		array_push($events, $event);
	}
}

echo json_encode($events);
?>