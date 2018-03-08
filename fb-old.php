<!DOCTYPE html>
<html lang="en">
<head>
	<title>Facebook Reservationen</title>
	<meta name="p:domain_verify" content="8a67f089a24bd53fab103285cfd0facf"/>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<meta http-equiv="X-XSS-Protection" content="0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
    <meta name="author" content="IVY - club & events">
	<meta name="content-language" content="de" />
	<meta name="author" content="IVY - club & events" />
	<meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Disco, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Discothek, Firmenanlässe" />
	<meta name="page-topic" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Disco, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Discothek, Firmenanlässe" />
	<meta property="og:type" content="business.business">
	<meta property="og:title" content="Facebook Reservationen">
	<meta property="og:description" content="Lounge Reservation oder Tisch anfragen">
	<meta property="og:url" content="https://www.ivyclub.ch">
	<meta property="og:image" content="https://www.ivyclub.ch/img/logo_intro.png">
	<meta property="fb:app_id" content="1104542262999578">
	<meta property="business:contact_data:street_address" content="Bahnhofstrasse 10">
	<meta property="business:contact_data:locality" content="St.Gallen">
	<meta property="business:contact_data:region" content="St. Gallen">
	<meta property="business:contact_data:postal_code" content="9000">
	<meta property="business:contact_data:country_name" content="Switzerland">
	<meta property="business:contact_data:email" content="welcome@ivyclub.ch">
	<meta property="business:contact_data:website" content="https://www.ivyclub.ch/img/logo_intro.png">
	<meta property="place:location:latitude" content="47.425747">
	<meta property="place:location:longitude" content="9.732654">
	<link rel="canonical" href="https://www.ivyclub.ch/reservationen" />
    <link rel="icon" type="image/png" href="/images/favicon.png">
    <link href="css/styles.css" rel="stylesheet">
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:346744,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-82822902-1', 'auto');
</script>
</head>
<body>

	<header>
	</header>
	
	<div id="pagepiling" >
	
		<div class="single-page contact-area" id="section-12-ab">
			<div class="single-page-wrapper" data-slide-page-for-menu="to-right">
				<div class="single-page-wrapper-2">
					<div class="single-page-bg" data-animation-bg="inverse"></div>
					
					<div class="content-wrapper">
				
						<div class="full-area hidden-xs facebook" data-animation-bg="inverse">
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
			</div><!-- single-page-wrapper -->
		</div><!-- intro -->
		
	</div><!-- pagePile -->
</body>
</html>
    <?php
        include('./include/js_lib.php')
    ?>
    
<script type="application/ld+json"> { 
"@context" : "http://schema.org",
"@type" : "LocalBusiness", 
"address" : {
"@type": "PostalAddress",
"addressLocality": "St.Gallen", 
"addressRegion": "Ostschweiz", 
"postalCode": "9000", 
"streetAddress": "Bahnhofstrasse 10" }, 
"name":"IVY - club & events",
"url":"www.ivyclub.ch",
"email":"welcome@ivyclub.ch",
"openingHours": [ 
"22.00-05.00"], 
"paymentAccepted":"Visa, Master Card, Discover, Amex",
"image" : "https://www.ivyclub.ch/images/logo.png"
} </script>
