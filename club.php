<!DOCTYPE html>
<html lang="en">
<head>
	<title>Private Hire - Firmen- und Privatanlässe im IVY St.Gallen</title>
<?php
    include('./include/header_meta.php')
?>
    <meta name="description" content="Firmen- und Privatanlässe lassen sich optimal und exklusiv im IVY Club umsetzen">
	<meta name="keywords" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Disco, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Discothek, Firmenanlässe" />
	<meta name="page-topic" content="Club, Club St.Gallen, Events, Party, Veranstaltung, Disco, Ausgang, Ausgang St.Gallen, Club Ostschweiz, Clubbing, Discothek, Firmenanlässe" />
	<meta property="og:title" content="Private Hire - Firmen- und Privatanlässe im IVY Club St.Gallen">
	<meta property="og:description" content="Firmen- und Privatanlässe lassen sich optimal und exklusiv im IVY Club umsetzen.">
<?php
    include('./include/header_meta_og.php')
?>
	<link rel="canonical" href="https://www.ivyclub.ch/club" />
<?php
    include('./include/header.php')
?>
<?php
    include('./include/footer.php')
?>
	<div id="pagepiling" >
	
		<div class="single-page postcontent" id="section-12">
			<div class="single-page-wrapper" data-slide-page-for-menu="to-right">
				<div class="single-page-wrapper-2">
					<div class="single-page-bg" data-animation-bg="inverse"></div>
					
					<div class="content-wrapper">
					
						<div class="left-area half-area" data-animation-content="inverse">
							<div class="writing-wrapper to-top delay-2" data-animation-down="to-top" data-animation-up="to-bottom">				
								<h1 class="heading title-about"><b>PRIVATE ANLÄSSE</b></h1>
								<h5 class="desc">GOOD VIBES, GOOD TIMES!</h5>
								<div class="club" >
									<div class="left-area" data-animation-down="to-top" data-animation-up="to-bottom">
										<img src="images/about/about03.jpg" alt="about Image">
										<img src="images/about/about02.jpg" alt="about Image">
									</div>
									<div class="right-area" data-animation-down="to-top" data-animation-up="to-bottom">
										<img src="images/about/about02.jpg" alt="about Image">
										<img src="images/about/about03.jpg" alt="about Image">
									</div>
								</div>
							</div>
						</div>
					
						
						<div class="right-area half-area hidden-xs" data-animation-bg="inverse">
							<div class="writing-wrapper to-top delay-3" data-animation-down="to-top" data-animation-up="to-bottom">
								<div class="address">
									<p class="desc">
										Unsere Lokalität bietet Ihnen eine einzigartige Atmosphäre für Ihren Anlass mit viel Freiheit für Ihre modernen, inspirierenden und kreativen Ideen. Teilen Sie uns Ihre Vorstellungen mit und wir schaffen die perfekte Umgebung dafür. Gerne übernehmen wir auch die Organisation Ihres Anlasses. Vom Catering zum Entertainment-Programm bis hin zur Dekoration; für uns ist keine Herausforderung zu gross!<br/>
									</p>
								</div>
								<div class="col-sm-12">
									<a class="home-btn openframe" target="_blank" href="docs/corporate.pdf" data-fancybox-type="iframe"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Broschüre</a>

									<a rel="gallery" class="home-btn fancybox" href="docs/grundriss.jpg"><i class="fa fa-file-text-o" aria-hidden="true"></i> Grundrissplan</a>
									
								</div>
							</div>
						</div>
					</div><!-- content-wrapper -->
				</div><!-- single-page-wrapper-2 -->
			</div><!-- single-page-wrapper -->
		</div><!-- intro -->
	</div><!-- pagePile -->
	
	


<link type="text/css" href="//fonts.googleapis.com/css?family=Abel" rel="stylesheet">
<?php
    include('./include/js_lib.php')
?>
<script src="//cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js"></script>
<?php
$js = array(
       'insta.js',
       'home.js'
);
foreach($js as $filename) {
	$filemtime = filemtime(dirname(__FILE__) . '/js/' . $filename);
	echo "<script src='/js/$filename?$filemtime' defer>\n";
	echo "</script>\n";
}
?>
	<script>

		</script>
<?php
    include('./include/structure.php')
?>
</body>
</html>