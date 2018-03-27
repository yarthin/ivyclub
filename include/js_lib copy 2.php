<link type="text/css" href="//fonts.googleapis.com/css?family=Abel" rel="stylesheet">

<?php
$css = array(
    'jquery.pagepiling.min.css',
    'material-design-iconic-font.min.css',
    'pe-icon-7-stroke.css',
    'swiper.min.css',
    'jquery.fancybox.css'

);

foreach($css as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/../css/' . $filename);
	echo "<link type='text/css' href='/css/$filename?$filemtime'  rel='stylesheet' />\n";
}

$js = array(
 	'main-prod-one.min.js',
    'main-prod-two.min.js'
 
);

foreach($js as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/../js/selectjs/' . $filename);
	echo "<script src='/js/selectjs/$filename?$filemtime'>\n";
	echo "</script>\n";
}

$js = array(
    'select2.min.js',

);

foreach($js as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/../js/selectjs/select2/' . $filename);
	echo "<script src='/js/selectjs/select2/$filename?$filemtime'>\n";
	echo "</script>\n";
}

$css = array(
    'main-prod.min.css'

);

foreach($css as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/../css/selectcss/' . $filename);
	echo "<link type='text/css' href='/css/selectcss/$filename?$filemtime'  rel='stylesheet' />\n";
}

$css = array(
    'select2.min.css'

);

foreach($css as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/../js/selectjs/select2/' . $filename);
	echo "<link type='text/css' href='/js/selectjs/select2/$filename?$filemtime'  rel='stylesheet' />\n";
}

$js = array(
    
    'swiper.jquery.min.js',
    'jquery.pagepiling.min.js',
    'jquery.mousewheel.pack.js',
    'jquery.fancybox.pack.js',
    'scripts.min.js',
    'moment.min.js',
    'pikaday.min.js',
    'pikaday.jquery.min.js',
    'datepicker-slide.js',
    'jquery.contactable.min.js',
    'jquery.jigowatt.min.js',
    'plugins.min.js'  
);

foreach($js as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/../js/' . $filename);
	echo "<script src='/js/$filename?$filemtime'>\n";
	echo "</script>\n";
}


?> 





    