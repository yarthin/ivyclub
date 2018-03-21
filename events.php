<!DOCTYPE html>
<html lang="en">

<head>
    <title>Events - There is always a reason to Celebrate!</title>
<?php
    include('./include/header_meta.php')
?>
    <meta name="description" content="Internationalen Künstlern bei Events und Konzerte aller Art">
    <meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Veranstaltungen St.Gallen, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Party St.Gallen, Party" />
    <meta name="page-topic" content="Party, Club, Discothek, Events, Veranstaltung, Konzerte, ausgang, Live Musik, künstler, partyfotos" />
    <meta property="og:title" content="Events - There is always a reason to Celebrate!">
    <meta property="og:description" content="Internationalen Künstlern bei Events und Konzerte aller Art">
<?php
    include('./include/header_meta_og.php')
?>
    <link rel="canonical" href="https://www.ivyclub.ch/events" />
<?php
    include('./include/header.php')
?>
   
<?php
    include('./include/footer.php')
?>
    <div id="pagepiling">

        <!-- EVENTS -->
        <div class="single-page postcontent" id="section-2">
            <div class="single-page-wrapper" data-slide-page-for-menu="to-right">
                        <div class="single-page-bg" data-animation-bg="inverse"></div>
                            <div class = 'temp-team'  >
    	                        <h2 class="heading"><b>EVENTS</b></h2>
    	                        <h5 class="heading">THERE IS ALWAYS A REASON TO CELEBRATE!</h5>
                                
                                <div class="swiper-container mobile-row" data-direction="horizontal" data-slide-effect="slide" data-scrollbar="false" data-swiper-wheel-control="false" data-swiper-margin="1">
                                    <div class="swiper-control-wrapper left" data-animation-down="to-top" data-animation-up="to-bottom">
                                        <h6 class="swiper-control swiper-button-prev">ZURÜCK</h6>
                                    </div>
                                    <div class="swiper-control-wrapper right" data-animation-down="to-top" data-animation-up="to-bottom">
                                        <h6 class="swiper-control swiper-button-next">WEITER</h6>
                                    </div>                                    
                                    <div class="swiper-wrapper " id="fb-event-wrapper-m">
                                        <div id = 'slideM_0' class = 'swiper-slide' >
                                            <div id= 'subslideM_0' class = 'subslide' ></div>
                                            <div id= 'subslideM_1' class = 'subslide' ></div>
                                        </div>
                                        <div id = 'slideM_1' class = 'swiper-slide' >
                                            <div id= 'subslideM_2' class = 'subslide' ></div>
                                            <div id= 'subslideM_3' class = 'subslide' ></div>
                                        </div>
                                        <div id = 'slideM_2' class = 'swiper-slide' >
                                            <div id= 'subslideM_4' class = 'subslide' ></div>
                                            <div id= 'subslideM_5' class = 'subslide' ></div>
                                        </div>
                                        <div id = 'slideM_3' class = 'swiper-slide' >
                                            <div id= 'subslideM_6' class = 'subslide' ></div>
                                            <div id= 'subslideM_7' class = 'subslide' ></div>
                                            
                                        </div>
                                    </div>

                                    
                                <!-- swiper-container -->
                                </div>
                                
                                <div class="swiper-container desktop-row" data-direction="horizontal" data-slide-effect="slide" data-scrollbar="false" data-swiper-wheel-control="false" data-swiper-margin="1">
                                    <div class="swiper-control-wrapper left" data-animation-down="to-top" data-animation-up="to-bottom">
                                        <h6 class="swiper-control swiper-button-prev">ZURÜCK</h6>
                                    </div>
                                    <div class="swiper-control-wrapper right" data-animation-down="to-top" data-animation-up="to-bottom">
                                        <h6 class="swiper-control swiper-button-next">WEITER</h6>
                                    </div>
                                    <div class="swiper-wrapper " id="fb-event-wrapper">
                                        <div id = 'slide_0' class = 'swiper-slide' >
                                            
                                            <div id= 'subslide_0' class = 'subslide' ></div>
                                            <div id= 'subslide_1' class = 'subslide' ></div>
                                            <div id= 'subslide_2' class = 'subslide' ></div>
                                            <div id= 'subslide_3' class = 'subslide' ></div>

                                        </div>
                                        <div id = 'slide_1' class = 'swiper-slide' >
                                            <div id= 'subslide_4' class = 'subslide' ></div>
                                            <div id= 'subslide_5' class = 'subslide' ></div>
                                            <div id= 'subslide_6' class = 'subslide' ></div>
                                            <div id= 'subslide_7' class = 'subslide' ></div>
                                        </div>
                                    </div>                                 
                                <!-- swiper-container -->
                                </div>

                        </div>    
                <!-- single-page-wrapper-2 -->
            </div>
            <!-- single-page-wrapper -->
        </div>
        <!-- single-page -->

        <!-- CONTACT -->
        
	</div><!-- pagePile -->
</body>
</html>
    <?php
        include('./include/js_lib.php')
    ?>    
<script>
$(document).ready(function() {
	var options = '<option value="" selected>Event wählen</option>';
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
<?php
    include('./include/structure.php')
?>
<script type="application/ld+json">
  {
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Brooklyn",
  "startDate": "2018-03-23T22:00",
  "endDate": "2018-03-24T05:00",
  "duration" : "6H",
  "url" : "http://www.ivyclub.ch/events",
  "image" : "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/29176709_1754701991253489_2238125758801248256_o.jpg?oh=c625d9396b3a61ecf8344484a91b1ff5&oe=5B3A2DD5",
  "description" : "Wir drehen die Zeit ein wenig zurück und tischen euch die besten Underground Hip Hop Classics von den 80’s, 90’s und 2000er auf – natürlich dürfen auch aktuelle Tracks nicht fehlen!",
    "location" : {
    "@type" : "Place",
    "address" : {
	"@type": "PostalAddress",
	"addressLocality": "St.Gallen", 
	"addressRegion": "Ostschweiz", 
	"postalCode": "9000", 
	"streetAddress": "Bahnhofstrasse 10" },
    "name" : "IVY Club St.Gallen"
  },
  "offers": {
     "@type": "Offer",
     "priceCurrency" : "CHF",
     "price" : "20.00",
     "availability" : "http://schema.org/InStock",
     "category" : "Primary",
     "url" : "http://www.ivyclub.ch/reservation",
     "validFrom": "2018-03-01T16:20-08:00"
  },
  "performer" : {
    "@type" : "Person",
    "@id" : "http://www.ivyclub.ch/about",
    "name" : "Madnazz & Rizzle",
    "sameAs" : "https://www.ivyclub.ch/about"
  }
  },
  {
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Bamboo",
  "startDate": "2018-03-24T22:00",
  "endDate": "2018-03-25T05:00",
  "duration" : "6H",
  "url" : "http://www.ivyclub.ch/events",
  "image" : "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/28577883_10156152133274481_5844390153231813203_n.jpg?oh=737708b83c53d71afb1188b321050361&oe=5B395C68",
  "description" : "Am 24. März 2018 begrüssen wir euch zur BAMBOO - SATURDAY EDITION im IVY Club! An den Turntables fliegen wir DJ JEKEY aus Hong Kong ein. 
",
    "location" : {
    "@type" : "Place",
    "address" : {
	"@type": "PostalAddress",
	"addressLocality": "St.Gallen", 
	"addressRegion": "Ostschweiz", 
	"postalCode": "9000", 
	"streetAddress": "Bahnhofstrasse 10" },
    "name" : "IVY Club St.Gallen"
  },
  "offers": {
     "@type": "Offer",
     "priceCurrency" : "USD",
     "price" : "25.00",
     "availability" : "http://schema.org/InStock",
     "category" : "Primary",
     "url" : "http://www.ivyclub.ch/reservation",
     "validFrom": "2018-03-01T16:20-08:00"
  },
  "performer" : { "@id" : "https://www.ivyclub.ch/about" }
  }
 }
</script>