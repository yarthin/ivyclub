<!DOCTYPE html>
<html lang="en">
<head>
	<title>Friendlist</title>
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
	<link rel="canonical" href="https://www.ivyclub.ch/list" />
<?php
    include('./include/header_list.php')
?>

	<div id="pagepiling" >
	
		<div class="single-page contact-area" id="section-12-ab">
				<div class="single-page-wrapper-2">
					<div class="single-page-bg" data-animation-bg="inverse"></div>
					
					<div class="content-wrapper">
					
						<div class="left-area half-area" data-animation-content="inverse">
							<div class="writing-wrapper to-top delay-2" data-animation-down="to-top" data-animation-up="to-bottom">
								<h1 class="heading reservHeading"><b>FRIENDLIST</b></h1>
								<div class="address">
									<h3 class="title">Bla Bla</h3>
									<h6 class="desc">
										Für schmarotzer :)</h6><br/>
								</div>

							</div>
						</div>
						<div class="right-area half-area hidden-xs" data-animation-bg="inverse">
							<div class="writing-wrapper to-top delay-3" data-animation-down="to-top" data-animation-up="to-bottom">
								<div class="contact-form">
									<div id="message"></div>
										<form method="post" action="include/create_friendlist.php" name="friendlistformdirect" id="friendlistformdirect">
										<input type="text" aria-required="true" id="firstname" name="firstname" class="form-control" placeholder="Vorname" aria-invalid="true" required >
										
										<input type="text" aria-required="true" id="lastname" name="lastname" class="form-control" placeholder="Nachname" aria-invalid="true" required >
										
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
										<input type = 'text' id= 'event_txt' name = 'event_txt' >
										
										<button class="submit-btn" type="submit" id="submit">Eintragen <i class="zmdi zmdi-long-arrow-right"></i></button>
							
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
<?php
    include('./include/js_lib.php')
?>	

<script type="text/javascript">	
	$(document).ready(function(){	
			 
		$('#people_num').select2({	
			minimumResultsForSearch: 1	
		});
	});
</script>