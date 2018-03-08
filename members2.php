<!DOCTYPE html>
<html lang="en">
<head>
	<title>Members - Be a VIP! IVY Gold Member</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
    <meta name="author" content="IVY - club & events">
	<meta name="content-language" content="de" />
	<meta name="author" content="IVY - club & events" />
	<meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Veranstaltungen St.Gallen, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Party St.Gallen, Party" />
	<meta name="page-topic" content="Party, Club, Discothek, Events, Veranstaltung, Konzerte, ausgang, Live Musik, künstler, partyfotos" />
	<meta property="og:type" content="business.business">
	<meta property="og:title" content="Be a VIP! IVY Gold Membere">
	<meta property="og:description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
	<meta property="og:url" content="https://www.ivyclub.ch">
	<meta property="og:image" content="https://www.ivyclub.ch/img/logo_intro.png">
	<meta property="fb:app_id" content="1104542262999578">
	<meta property="business:contact_data:street_address" content="Bahnhofstrasse 10">
	<meta property="business:contact_data:locality" content="St.Gallen">
	<meta property="business:contact_data:region" content="St. Gallen">
	<meta property="business:contact_data:postal_code" content="9000">
	<meta property="business:contact_data:country_name" content="Switzerland">
	<meta property="business:contact_data:email" content="welcome@ivyclub.ch">
	<meta property="business:contact_data:website" content="https://www.ivyclub.ch/images/logo_intro.png">
	<meta property="place:location:latitude" content="47.425747">
	<meta property="place:location:longitude" content="9.732654">

<?php
    include('./include/header.php')
?>

	<div class="footer-writing right fixed-writing">
		<ul class="icons">

			
			
			<li><a href="https://www.facebook.com/ivyclubsg"><i class="zmdi zmdi-facebook"></i></a></li>
								<li><a href="https://www.instagram.com/ivyclubsg/"><i class="zmdi zmdi-instagram"></i></a></li>
								<li><a href="https://www.twitter.com/ivyclubsg"><i class="zmdi zmdi-twitter"></i></a></li>
								<li><a href="https://plus.google.com/+IvyclubCh"><i class="zmdi zmdi-google"></i></a></li>
								<li><a href="https://www.youtube.com/channel/UC3lcckYRJYjuJLHBtvZN0qQ"><i class="zmdi zmdi-youtube"></i></a></li>
								<li><a href="mailto:welcome@ivyclub.ch"><i class="zmdi zmdi-email"></i></a></li>	
		</ul><!-- icons -->
	</div><!-- right-writing -->
	
	<section class="body-content photo-page-bg members" id="section-photo">
        <div class="single-page-wrapper-2">
            <div class="page-content memberBox">
                <div class="container" style = 'height : 100% ; ' >
                    <div class="row" style = 'height : 100% ; -webkit-overflow-scrolling: touch;  	overflow-y: scroll; border: 1px solid blue;'>
                        <div class="col-md-12 m-top-50">
                            <div class="post-desk">
                            <div class="writing-wrapper to-bottom delay-2" data-animation-down="to-top" data-animation-up="to-bottom">
								<h1 class="heading title-about"><b>MEMBERS</b></h1>
								<h4 class="title">FRIENDS WITH BENEFITS</h4>
							</div>
                                
                            </div>
                        </div>
                        <div class="col-md-12">
                           	<div id = 'members_half' class="left-area half-area" data-animation-content="inverse">
								<div class="writing-wrapper to-top delay-2" data-animation-down="to-top" data-animation-up="to-bottom">
									<div class="address">
										<h6 class="desc">
											Für alle, die am Wochenende ihre Füsse nicht stillhalten können und das volle IVY-Erlebnis geniessen möchten:</h6>
									</div>
									<div class="address">
										<h6 class="desc">
											<ul>
											<li>- freier Einlass für jede Wochenend-Veranstaltung inkl. 1 Begleitperson (ausgen. sind Auftritte von besonderen Künstlern)</li>
											<li>- bevorzugte Behandlung sowie vergünstige Eintrittspreise bei speziellen Act-Auftritten</li>
											<li>- direkter Einlass über den VIP-Eingang</li>
											<li>- kostenlose Garderobe</li>
											</ul>
											
											</h6>
											
									</div>
								</div>
							</div>
						</div>
						<div id = 'member_box' class="right-area half-area hidden-xs" data-animation-bg="inverse">
							<div class="writing-wrapper to-top delay-3" data-animation-down="to-top" data-animation-up="to-bottom" style = ''>
							
								<script src="js/passcreator.load.js?landingpage=https://app.passcreator.com/l/membergold?showMenu=false"></script>					
						
							</div>
						</div>                        <!-- /div -->
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>
</html>
    
	<?php
        include('./include/js_lib.php')
    ?>   

<script type="text/javascript">

$(document).ready(function() {
	var options = '<option value="" selected>Bitte wählen</option>';
	<?php foreach($result_json["event"] as $evt) { ?>
		<?php 
		$startdate = explode(" ", $evt["startdate"])[0];
		$startdate_arr = explode("-", $startdate);
		$value = $evt["name"]." - ".$startdate_arr[2]."-".$startdate_arr[1]."-".$startdate_arr[0]; 
		?>
		options += '<option value="<?php echo $value; ?>"><?php echo $value; ?></option>';
	<?php } ?>
	$("select#subject").html(options);
	
	$('#subject').select2({
		minimumResultsForSearch: 1
	});
});
</script>