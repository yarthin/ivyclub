<!DOCTYPE html>
<html lang="en">
<head>
	<title>Reservationen - Für alle die das volle IVY-Erlebnis geniessen möchten</title>
<?php
include('./include/header_meta.php')
?>
    <meta name="description" content="Für alle, die am Wochenende das volle IVY-Erlebnis geniessen möchten">
	<meta name="keywords" content="Club, Club St.Gallen, Events, Events St.Gallen, Party, Veranstaltung, Disco, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Discothek, Firmenanlässe" />
	<meta name="page-topic" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Disco, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Discothek, Firmenanlässe" />
	<meta property="og:title" content="Reservationen - Für alle, die am Wochenende das volle IVY-Erlebnis geniessen möchten">
	<meta property="og:description" content="Für alle, die am Wochenende das volle IVY-Erlebnis geniessen möchten">
<?php
    include('./include/header_meta_og.php')
?>
	<link rel="canonical" href="https://www.ivyclub.ch/reservation" />
<?php
    include('./include/header.php')
?>
<?php
    include('./include/footer.php')
?>	
	<div id="pagepiling" >
	
		<div class="single-page contact-area" id="section-12-ab">
				<div class="single-page-wrapper-2">
					<div class="single-page-bg" data-animation-bg="inverse"></div>
					
					<div class="content-wrapper">
					
						<div class="left-area half-area" data-animation-content="inverse">
							<div class="writing-wrapper to-top delay-2" data-animation-down="to-top" data-animation-up="to-bottom">
								<h1 class="heading reservHeading"><b>RESERVATION</b></h1>
								<div class="address">
									<h3 class="title">Be a Part</h3>
									<h6 class="desc">
										Für alle, die am Wochenende ihre Füsse nicht stillhalten können und das volle IVY-Erlebnis geniessen möchten: </h6><br/>
								</div>

							</div>
						</div>
						<div class="right-area half-area hidden-xs" data-animation-bg="inverse">
							<div class="writing-wrapper to-top delay-3" data-animation-down="to-top" data-animation-up="to-bottom">
								<div class="contact-form">
									<div id="message"></div>
										<form method="post" action="include/create_loungereservation.php" name="reservationformdirect" id="reservationformdirect">
										<input type="text" aria-required="true" id="firstname" name="firstname" class="form-control" placeholder="Vorname" aria-invalid="true" required >
										
										<input type="text" aria-required="true" id="lastname" name="lastname" class="form-control" placeholder="Nachname" aria-invalid="true" required >
										
										<input type="text" aria-required="true" id="email" name="email" class="form-control" placeholder="E-Mail" aria-invalid="true" required >
							
										<input id="telno" name="Telefon" type="tel" placeholder="Telefon" class="form-control" aria-invalid="true" required >
										<input type="text" aria-required="true" id="birthday" name="Geburtstdatum" class="form-control" placeholder="Geburtstdatum" aria-invalid="true" required="" aria-label="Benutze die Maske um ein Datum zu wählen">
										
										<select name="subject" id="subject" class="form-control" aria-invalid="true" required >
											<option value="" >Event wählen</option>
											<?php include_once("include/events_api.php"); 
											foreach($result_json["event"] as $evt) { 
											?>
												<?php 
												$startdate = explode(" ", $evt["startdate"])[0];
												$startdate_arr = explode("-", $startdate);
												$value = $evt["name"]." - ".$startdate_arr[2]."-".$startdate_arr[1]."-".$startdate_arr[0]; 
												?>
												<option value="<?php echo $evt["id"]; ?>"><?php echo $value; ?></option>
											<?php } ?>
										</select>
										<input type = 'hidden' id= 'event_txt' name = 'event_txt' >
										<input type="text" aria-required="true" id="redate" name="Anderes Datum" class="form-control" placeholder="Anderes Datum" aria-invalid="true" required="" aria-label="Benutze die Maske um ein Datum zu wählen">
										<!-- input type="text" aria-required="true" id="people_num" name="people_num" class="form-control" placeholder="Anzahl Person" aria-invalid="true" required  maxlength="15" pattern="\d*" --> 
										<select name="people_num" id="people_num" class="form-control" label="Vorname" aria-invalid="true" required >
							                <option value="" selected>Anzahl Person</option> 
							                <option value="5" >Anzahl Person : 5</option> 
							                <option value="10" >Anzahl Person : 10</option> 
							                <option value="15" >Anzahl Person : 15</option> 
							                <option value="20" >Anzahl Person : 20</option> 
							                <option value="25" >Anzahl Person : 25</option> 
							                <option value="30" >Anzahl Person : 30</option> 
							                <option value="35" >Anzahl Person : 35</option> 
							                <option value="40" >Anzahl Person : 40</option> 
							                <option value="45" >Anzahl Person : 45</option> 
							                <option value="50" >Anzahl Person : 50</option> 
							                
							            </select>
							
										<button class="submit-btn" type="submit" id="submit">Jetzt Reservieren <i class="zmdi zmdi-long-arrow-right"></i></button>
							
										</form>
						

								</div>
							</div>
						</div>
					</div><!-- content-wrapper -->
				</div><!-- single-page-wrapper-2 -->
		</div><!-- intro -->
		
	</div><!-- pagePile -->
</body>
</html>
<link type="text/css" href="//fonts.googleapis.com/css?family=Abel" rel="stylesheet">
<?php
$css = array(
    'jquery.pagepiling.min.css',
    'material-design-iconic-font.min.css',
    'pe-icon-7-stroke.css',
    'swiper.min.css',

);

foreach($css as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/css/' . $filename);
	echo "<link type='text/css' href='/css/$filename?$filemtime'  rel='stylesheet' />\n";
}

$js = array(
 	'main-prod-one.min.js',
    'main-prod-two.min.js'
 
);

foreach($js as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/js/selectjs/' . $filename);
	echo "<script src='/js/selectjs/$filename?$filemtime'>\n";
	echo "</script>\n";
}

$js = array(
    'select2.min.js',

);

foreach($js as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/js/selectjs/select2/' . $filename);
	echo "<script src='/js/selectjs/select2/$filename?$filemtime'>\n";
	echo "</script>\n";
}

$css = array(
    'main-prod.min.css'

);

foreach($css as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/css/selectcss/' . $filename);
	echo "<link type='text/css' href='/css/selectcss/$filename?$filemtime'  rel='stylesheet' />\n";
}

$css = array(
    'select2.min.css'

);

foreach($css as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/js/selectjs/select2/' . $filename);
	echo "<link type='text/css' href='/js/selectjs/select2/$filename?$filemtime'  rel='stylesheet' />\n";
}

$js = array(
    
    'swiper.jquery.min.js',
    'jquery.pagepiling.min.js',

    'scripts.min.js',
    'moment.min.js',
    'pikaday.min.js',
    'pikaday.jquery.min.js',
    'datepicker.js',
    'jquery.jigowatt.min.js',
    'plugins.min.js'  
);

foreach($js as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/js/' . $filename);
	echo "<script src='/js/$filename?$filemtime'>\n";
	echo "</script>\n";
}


?> 

<script type="text/javascript">	
	$(document).ready(function(){	
			 
		$('#people_num').select2({	
			minimumResultsForSearch: 1	
		});
	});
</script>
<?php
    include('./include/structure.php')
?>