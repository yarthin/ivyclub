<!DOCTYPE html>
<html lang="en" class="photos-no-over">

<head>
    <title>Photos - Bilder der vergangenen Nächte</title>
    <?php
    include('./include/header_meta.php')
?>
    <meta name="description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
    <meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Veranstaltungen St.Gallen, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Party St.Gallen, Party" />
    <meta name="page-topic" content="Party, Club, Discothek, Events, Veranstaltung, Konzerte, ausgang, Live Musik, künstler, partyfotos" />
    <meta property="og:title" content="Photos - IVY - club & events stilvolle Atmosphäre für ausgelassene Club Nächte">
    <meta property="og:description" content="Für alle, die eine stilvolle und gediegene Atmosphäre für ausgelassene Club Nächte mit Internationalen Künstlern sowie Events und Konzerte jeglicher Art mögen.">
<?php
    include('./include/header_meta_og.php')
?>
    <link rel="canonical" href="https://www.ivyclub.ch/photos" />

<?php
    include('./include/header.php')
?>

<?php
    include('./include/footer.php')
?>


    <div class="single-page-bg photos-filter" data-animation-bg="inverse"></div>
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
<?php
    include('./include/structure.php')
?>