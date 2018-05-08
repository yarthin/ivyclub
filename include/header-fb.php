<link rel="icon" type="image/png" href="/images/favicon.png">
<?php
$filemtime = filemtime(dirname(__FILE__) . '/../css/styles.css');
echo "<link type='text/css' href='css/styles.css?$filemtime' rel='stylesheet'/>\n";
	
$filemtime = filemtime(dirname(__FILE__) . '/../js/jquery.min.js');
echo "<script src='js/jquery.min.js?$filemtime'>\n";
echo "</script>\n";	
?>
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
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-82822902-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-82822902-1');
</script>
</head>
<body>        
    <div id = 'header' >
        <nav>
            <div class="logo">
                <a href="home"><img src="images/logo.png" alt="IVY Logo"></a>
            </div>
        </nav>
    </div>
    