<!DOCTYPE html>
<html lang="en">
<head>
	<title>Members - Be a VIP! IVY Gold Member</title>
<?php
    include('./include/header_meta.php')
?>
    <meta name="description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
	<meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Veranstaltungen St.Gallen, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Party St.Gallen, Party" />
	<meta name="page-topic" content="Party, Club, Discothek, Events, Veranstaltung, Konzerte, ausgang, Live Musik, künstler, partyfotos" />
	<meta property="og:type" content="business.business">
	<meta property="og:title" content="Be a VIP! IVY Gold Membere">
	<meta property="og:description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
<?php
    include('./include/header_meta_og.php')
?>
    <link rel="canonical" href="https://www.ivyclub.ch/members" />
<?php
    include('./include/header.php')
?>
   
<?php
    include('./include/footer.php')
?>
	<div class="single-page-bg photos-filter" data-animation-bg="inverse"></div>
	<section class="body-content photo-page-bg members" id="section-photo">
        <div class="single-page-wrapper-2">
        	
            <div class="page-content memberBox">
                <div class="container" style = 'height : 100% ; ' >
                    <div class="row" style = 'height : 100% ; -webkit-overflow-scrolling: touch;  	overflow-y: scroll; '>
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
										<h6 class="listen">
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
							<div class="writing-wrapper to-top delay-3" data-animation-down="to-top" data-animation-up="to-bottom" >
							
								<script src="//portal.passcreator.de/loader/lib/passcreator.load.js?landingpage=https://portal.passcreator.de/l/membergold?showMenu=false"></script>					
						
							</div>
						</div>                        <!-- /div -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    
<?php
    include('./include/js_lib.php')
?>   
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
	
	$('#subject').select2({
		minimumResultsForSearch: 1
	});
});
</script>
<?php
    include('./include/structure.php')
?>
</body>
</html>