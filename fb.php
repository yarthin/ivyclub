<!DOCTYPE html>
<html lang="de">
<head>
	<title>Facebook Reservationen</title>
<?php
    include('./include/header_meta.php')
?>
    <meta name="description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
	<meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Disco, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Discothek, Firmenanlässe" />
	<meta name="page-topic" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Disco, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Discothek, Firmenanlässe" />
	<meta property="og:title" content="Facebook Reservationen">
	<meta property="og:description" content="Lounge Reservation oder Tisch anfragen">
<?php
    include('./include/header_meta_og.php')
?>
	<link rel="canonical" href="https://www.ivyclub.ch/fb" />
<?php
    include('./include/header-fb.php')
?>
	<div id="pagepiling" >
		<div class="single-page contact-area" id="section-12-ab">
			<div class="single-page-wrapper" data-slide-page-for-menu="to-right">
				<div class="single-page-wrapper-2">
					<div class="single-page-bg" data-animation-bg="inverse"></div>
					<div class="content-wrapper"  >
						<div class="right-area half-area hidden-xs" data-animation-bg="inverse" style = 'width: 85%;'>
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
			</div><!-- single-page-wrapper -->
		</div><!-- intro -->
	</div><!-- pagePile -->
</body>
</html>
<?php
include('./include/js_lib.php')
?>
