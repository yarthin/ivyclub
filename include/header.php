<link rel="icon" type="image/png" href="/images/favicon.png">

<?php
$filemtime = filemtime(dirname(__FILE__) . '/../css/styles.css');
echo "<link type='text/css' href='css/styles.min.css?$filemtime' rel='stylesheet'/>\n";
	
$filemtime = filemtime(dirname(__FILE__) . '/../js/jquery.min.js');
echo "<script src='js/jquery.min.js?$filemtime'>\n";
echo "</script>\n";	
	
	
?>
<?php if (!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Speed Insights') === false): ?>
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:346744,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
// defer
</script>
<?php endif; ?>
<?php if (!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Speed Insights') === false): ?>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-82822902-1"></script>
<?php endif; ?>



<?php if (!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Speed Insights') === false): ?>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-82822902-1', 'auto');
    ga('send', 'pageview');
  </script>
<?php endif; ?>
<?php if (!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Speed Insights') === false): ?>

<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '273952083142088');
  fbq('track', 'PageView');
</script>
<?php endif; ?>

</head>
<body>
    <div class="css-loader">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
    </div>
    
    <?php include('./include/subReservation.php'); ?>
    
    <div id = 'header' >
        <nav>
            <div class="logo">
                <a href="home"><img src="images/logo.png" alt="IVY Logo"></a>
            </div>
            <div class="nav-icon" data-toggle="navigation" data-target="#main-menu">
                <span>MENU</span>
            </div>
            <div class="main-menu" id="main-menu" data-animation-in="to-right" data-animation-duration=".4">
                <div class="menu-wrapper">
                    <ul class="nav-menu">
                        <li><a href="home">HOME</a></li>
                        <li><a href="about">ABOUT</a></li>
                        <li><a href="club">PRIVATE HIRE</a></li>
                        <li><a href="photos">PHOTOS</a></li>
                        <li><a href="videos">VIDEOS</a></li>
                        <li><a href="events">EVENTS</a></li>
                        <li><a href="reservation">LOUNGE / TABLE</a></li>
                        <li><a href="members">MEMBERS</a></li>
                        <li><a href="contact">CONTACT</a></li>
                        <li>
                            <ul class="icons">
                                <li><a href="https://www.facebook.com/ivyclubsg"><i class="zmdi zmdi-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/ivyclubsg/"><i class="zmdi zmdi-instagram"></i></a></li>
                                <li><a href="https://www.twitter.com/ivyclubsg"><i class="zmdi zmdi-twitter"></i></a></li>
                                <li><a href="https://plus.google.com/+IvyclubCh"><i class="zmdi zmdi-google"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UC3lcckYRJYjuJLHBtvZN0qQ"><i class="zmdi zmdi-youtube"></i></a></li>
                                <li><a href="mailto:welcome@ivyclub.ch"><i class="zmdi zmdi-email"></i></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    