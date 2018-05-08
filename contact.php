<!DOCTYPE html>
<html lang="en">
<head>
	<title>Kontakt - Schreiben Sie uns wir melden uns</title>
<?php
    include('./include/header_meta.php')
?>
    <meta name="description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
	<meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Veranstaltungen St.Gallen, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Party St.Gallen, Party" />
	<meta name="page-topic" content="Party, Club, Discothek, Events, Veranstaltung, Konzerte, ausgang, Live Musik, künstler, partyfotos" />
	<meta property="og:title" content="Kontakt - Schreiben Sie uns wir melden uns">
	<meta property="og:description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
<?php
    include('./include/header_meta_og.php')
?>
	<link rel="canonical" href="https://www.ivyclub.ch/contact" />
<?php
    include('./include/header-contact.php')
?>

<?php
    include('./include/footer.php')
?>	
	<div id="pagepiling" >
	
		<div class="single-page contact-area" id="section-10-ab">
			<div class="single-page-wrapper" data-slide-page-for-menu="to-right">
				<div class="single-page-wrapper-2">
					<div class="single-page-bg" data-animation-bg="inverse"></div>
					
					<div class="content-wrapper">
					
						<div class="left-area half-area" data-animation-content="inverse">
							<div class="writing-wrapper to-top delay-2" data-animation-down="to-top" data-animation-up="to-bottom" id = 'contact_box' >
								<h2 class="heading contact-heading"><b>KONTAKT</b></h2>
								<div class="address">
									<h3 class="title">KEEP IN TOUCH</h3>
									<h6 class="desc">
										Für alle, die am Wochenende ihre Füsse nicht stillhalten können und das volle IVY-Erlebnis geniessen möchten: </h6>
								</div>
								<div class="address">
                                    <h3 class="title">IVY – CLUB & EVENTS</h3>
                                    <h6 class="desc">
                                        Bahnhofstrasse 10 <br/> 9000 St.Gallen <br/> Switzerland
                                    </h6>
                                </div>
                                <div class="address">
                                    <h3 class="title">Öffnungszeiten:</h3>
                                    <h6 class="desc">
                                        Club: Do – Sa jeweils ab 22 Uhr<br/> private Anlässe: nach Absprache<br/>
                                    </h6>
                                </div>

							</div>
						</div>
						<div class="right-area half-area hidden-xs" data-animation-bg="inverse">
							<div class="writing-wrapper to-top delay-3" data-animation-down="to-top" data-animation-up="to-bottom">
								<div class="contact-form">
									<div id="message"></div>
			
										<form method="post" action="include/contact.php" name="contactform" id="contactform">
							
										
											<input type="text" aria-required="true" id="firstname" name="firstname" class="form-control" placeholder="Vorname" aria-invalid="true" required >
											
											<input type="text" aria-required="true" id="lastname" name="lastname" class="form-control" placeholder="Nachname" aria-invalid="true" required >
											
											<input type="text" aria-required="true" id="email" name="email" class="form-control" placeholder="E-Mail" aria-invalid="true" required >
											
											<input type="text" aria-required="true" id="phone" name="phone" class="form-control" placeholder="Telefon" aria-invalid="true" required >
								
											<textarea name="comments" aria-required="true" cols="40" rows="3" class="form-control comments" id="comments" style="width: 100%; height: 120px" placeholder="Mitteilung"></textarea>
								
								
											<button class="submit-btn" type="submit" id="submit">Senden <i class="zmdi zmdi-long-arrow-right"></i></button>
										</form>
									</div>
							</div>
						</div>
					</div><!-- content-wrapper -->
				</div><!-- single-page-wrapper-2 -->
			</div><!-- single-page-wrapper -->
		</div><!-- intro -->
	</div><!-- pagePile -->
	

<?php
include('./include/js_lib.php');
include('./include/structure.php')
?>
</body>
</html>
