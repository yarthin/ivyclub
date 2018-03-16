<!DOCTYPE html>
<html lang="en" class="photos-no-over">

<head>
    <title>Photos - Bilder der vergangenen Nächte</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
    <meta name="author" content="IVY - club & events">
    <meta name="content-language" content="de" />
    <meta name="author" content="IVY - club & events" />
    <meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Veranstaltungen St.Gallen, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Party St.Gallen, Party" />
    <meta name="page-topic" content="Party, Club, Discothek, Events, Veranstaltung, Konzerte, ausgang, Live Musik, künstler, partyfotos" />
    <meta property="og:type" content="business.business">
    <meta property="og:title" content="Photos - IVY - club & events stilvolle Atmosphäre für ausgelassene Club Nächte">
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
    <link rel="canonical" href="https://www.ivyclub.ch/photos" />

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
        </ul>
        <!-- icons -->
    </div>
    <!-- right-writing -->



    <section class="body-content photo-page-bg" id="section-photo">
        <div class="single-page-wrapper-2">
            <div class="page-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 m-top-50">
                            <div class="post-desk">
                            <div class="writing-wrapper to-bottom delay-2" data-animation-down="to-top" data-animation-up="to-bottom">
								<h1 class="heading title-about"><b>Photos</b></h1>
								<h6 class="heading title-about-des">BEAUTIFUL MEMORIES</h6>
							</div>
                                
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div id="faba">
                                <div id="fb-breadcrumbs">
                                    <h5 id="fbgh">Übersicht</h5>
                                    <span id="fbpt">
										<b class="fb-first">1</b>
										von 
										<b class="fb-total"></b>
									</span>
                                </div>
                                <div id="faba-inner"></div>
                                <div id="fb-photos">
                                    <div class="fbp-container pg-1 clearfix"></div>
                                </div>
                                <div id="fbp-navs">

                                    <a id="phpr">Zurück</a> 
                                    <a id="phnx">Weiter</a>  
                                    <ul id="pagination"></ul>
                                    
                                </div>
                            </div>
                        </div>
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
    <script src="js/fbphoto-api.js" defer></script>
    <script src="js/faba.js" defer></script>
	<script>
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
		
	});
	</script>
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